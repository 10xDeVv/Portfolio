// Portfolio owns geometry and interaction; all labels and relationships are generated data.
export const escapeText = (value) => String(value).replace(/[&<>"']/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

const layouts = {
  breakpoint: {
    size: [1300, 560],
    nodes: {client:[150,90],api:[490,90],jobs:[830,90],engine:[830,360],baselines:[1160,360],results:[490,360],access:[150,360]},
    routes: {'access:api': [[150,326],[150,230],[420,230],[420,124]], 'results:api': [[490,326],[490,124]]},
  },
  wayward: {
    size: [1400, 800],
    nodes: {client:[150,120],api:[500,120],kafka:[850,120],worker:[1220,120],db:[500,480],redis:[1220,480],osrm:[1220,720],notify:[150,480]},
    routes: {
      'worker:kafka': [[1220,86],[1220,30],[850,30],[850,86]],
      'worker:db': [[1150,154],[1150,370],[580,370],[580,446]],
      'worker:osrm': [[1350,120],[1380,120],[1380,720],[1350,720]],
      'kafka:notify': [[850,154],[850,270],[150,270],[150,446]],
    },
  },
  lazydrop: {
    size: [1200, 700],
    nodes: {client:[160,300],api:[600,300],db:[1020,300],storage:[160,590],realtime:[1020,80],auth:[160,80],stripe:[600,590]},
    routes: {
      'realtime:client': [[1020,114],[1020,180],[220,180],[220,266]],
      'api:realtime': [[730,300],[820,300],[820,80],[890,80]],
      'api:stripe': [[650,334],[650,556]],
      'stripe:api': [[550,556],[550,334]],
    },
    labels: {'api:stripe':[765,420], 'stripe:api':[435,420]},
  },
};

function wrapped(text, x, y, limit = 28, className = 'diagram-label') {
  const lines = [];
  for (const word of String(text).split(/\s+/)) {
    if (!lines.length || (lines.at(-1) + ' ' + word).length > limit) lines.push(word);
    else lines[lines.length - 1] += ' ' + word;
  }
  return `<text class="${className}" x="${x}" y="${y}" text-anchor="middle">${lines.map((line,i)=>`<tspan x="${x}" dy="${i ? 20 : 0}">${escapeText(line)}</tspan>`).join('')}</text>`;
}

function svgStart(id, title, width, height) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" role="img" aria-labelledby="${id}-title" data-base-width="${width}"><title id="${id}-title">${escapeText(title)}</title><defs><marker id="${id}-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#a8c9bd"/></marker></defs>`;
}

export function architectureSvg(project) {
  const diagram = project.architecture;
  const layout = layouts[project.slug];
  if (!diagram || !layout) return '';
  const id = `${project.slug}-architecture`;
  const halfW = 130, halfH = 34;
  let svg = svgStart(id, `${project.title} architecture map`, ...layout.size);
  diagram.edges.forEach((edge) => {
    const a = layout.nodes[edge.from], b = layout.nodes[edge.to];
    if (!a || !b) throw new Error('Architecture layout needs a position for every generated node');
    const horizontal = Math.abs(b[0]-a[0]) > Math.abs(b[1]-a[1]);
    let points = layout.routes[`${edge.from}:${edge.to}`];
    if (!points) {
      const dx = Math.sign(b[0]-a[0]), dy = Math.sign(b[1]-a[1]);
      points = horizontal ? [[a[0]+dx*halfW,a[1]],[b[0]-dx*halfW,b[1]]] : [[a[0],a[1]+dy*halfH],[b[0],b[1]-dy*halfH]];
    }
    svg += `<path class="diagram-edge" d="M ${points.map(p=>p.join(' ')).join(' L ')}" marker-end="url(#${id}-arrow)"/>`;
    // Put text at the longest segment, not over a component box.
    let longest = [points[0],points[1]], length = 0;
    for(let i=1;i<points.length;i++) {
      const len = Math.hypot(points[i][0]-points[i-1][0],points[i][1]-points[i-1][1]);
      if(len>length) { length=len;longest=[points[i-1],points[i]]; }
    }
    const [start,end] = longest;
    const vertical = start[0]===end[0];
    const x = (start[0]+end[0])/2 + (vertical ? -68 : 0);
    const midpointY = (start[1]+end[1])/2;
    const y = vertical ? midpointY-10 : (midpointY < 65 ? midpointY-13 : midpointY-60);
    const position = layout.labels?.[`${edge.from}:${edge.to}`] || [x,y];
    svg += wrapped(edge.label,...position,vertical ? 17 : 30,'diagram-edge-label');
  });
  diagram.nodes.forEach(node=>{
    const [x,y]=layout.nodes[node.id] || [];
    if(x===undefined) throw new Error('Missing architecture layout');
    svg+=`<g><rect class="diagram-node" x="${x-halfW}" y="${y-halfH}" width="260" height="68" rx="12"/>${wrapped(node.label,x,y+5,29)}</g>`;
  });
  return svg+'</svg>';
}

export function lifecycleSvg(project) {
  const diagram = project.requestLifecycle;
  if (!diagram) return '';
  const id = `${project.slug}-lifecycle`, gap = 195, width = diagram.actors.length*gap+70;
  const height = diagram.steps.length*92+150;
  const positions = Object.fromEntries(diagram.actors.map((actor,i)=>[actor.id,135+i*gap]));
  let svg=svgStart(id,`${project.title} request lifecycle`,width,height);
  diagram.actors.forEach(actor=>{
    const x=positions[actor.id];
    svg+=`<path class="diagram-lifeline" d="M ${x} 78 V ${height-35}"/><rect class="diagram-node" x="${x-88}" y="20" width="176" height="58" rx="10"/>${wrapped(actor.label,x,55,20)}`;
  });
  diagram.steps.forEach((step,i)=>{
    const a=positions[step.from], b=positions[step.to], y=145+i*92;
    const path=a===b ? `M ${a} ${y} h 70 v 28 h -70` : `M ${a} ${y+22} H ${b}`;
    const x=a===b ? Math.min(a+120,width-170) : (a+b)/2;
    svg+=`<path class="diagram-edge${step.async?' diagram-async':''}" d="${path}" marker-end="url(#${id}-arrow)"/>`;
    svg+=wrapped(`${i+1}. ${step.label}`,x,y-18,Math.max(30,Math.min(64,Math.abs(a-b)/8)), 'diagram-edge-label');
  });
  return svg+'</svg>';
}

export function technicalDiagrams(project) {
  if (!project.architecture?.nodes || !project.requestLifecycle?.steps) return '';
  return `<section class="case-chapter project-technical-diagrams" aria-label="${escapeText(project.title)} technical diagrams">${[
    ['architecture','Architecture Map',project.architecture,architectureSvg(project)],
    ['lifecycle','Request Lifecycle',project.requestLifecycle,lifecycleSvg(project)],
  ].map(([kind,title,diagram,svg])=>`<details class="case-disclosure ${kind}-disclosure" open><summary><span>${title}</span></summary><div class="disclosure-body"><div class="architecture-diagram ${kind==='lifecycle'?'lifecycle-diagram':''}" tabindex="0" role="region" aria-label="${escapeText(project.title)} ${title}; scroll to explore"><div class="diagram-controls" aria-label="${title} zoom controls"><button type="button" data-diagram-zoom="out" aria-label="Zoom diagram out">−</button><button type="button" data-diagram-zoom="reset" aria-label="Reset diagram zoom">100%</button><button type="button" data-diagram-zoom="in" aria-label="Zoom diagram in">+</button></div>${svg}</div><p class="diagram-caption">${escapeText(diagram.caption)}</p><p class="diagram-navigation">Drag or scroll to explore · Use + / − to zoom${kind==='lifecycle'?' · Dashed arrows mark asynchronous delivery':''}</p></div></details>`).join('')}</section>`;
}

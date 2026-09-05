import test from 'node:test';
import assert from 'node:assert/strict';
import { generatedContent } from '../src/content.generated.js';
import { architectureSvg, lifecycleSvg, technicalDiagrams } from '../src/diagrams.js';
import { appTemplate } from '../src/components.js';

test('all featured diagrams render their generated nodes, actors and connections',()=>{
  for(const project of generatedContent.projects) {
    const architecture=architectureSvg(project), lifecycle=lifecycleSvg(project);
    assert.equal((architecture.match(/class="diagram-node"/g)||[]).length,project.architecture.nodes.length);
    assert.equal((architecture.match(/class="diagram-edge"/g)||[]).length,project.architecture.edges.length);
    assert.equal((lifecycle.match(/class="diagram-node"/g)||[]).length,project.requestLifecycle.actors.length);
    assert.equal((lifecycle.match(/marker-end=/g)||[]).length,project.requestLifecycle.steps.length);
    assert.ok(!/undefined|NaN/.test(architecture+lifecycle));
  }
});
test('untrusted diagram text is escaped without creating executable markup',()=>{
  const project=structuredClone(generatedContent.projects[0]);
  project.architecture.nodes[0].label='<script>alert(1)</script>';
  project.requestLifecycle.steps[0].label='<img onerror="bad">';
  project.architecture.caption='<iframe src="bad">';
  const html=technicalDiagrams(project);
  assert.ok(!/<script>|<img|<iframe/.test(html));
  assert.ok(html.includes('&lt;script&gt;'));
});
test('detail routes render exactly two diagrams and homepage renders none',()=>{
  for(const project of generatedContent.projects){
    globalThis.window={location:{hash:`#project/${project.slug}`}};
    const html=appTemplate();
    assert.equal((html.match(/data-base-width=/g)||[]).length,2);
    assert.ok(!/case file|proof board|engineering judgment|evidence surface|operating brief/i.test(html));
  }
  globalThis.window={location:{hash:'#work'}};
  assert.equal((appTemplate().match(/data-base-width=/g)||[]).length,0);
});
test('secondary entries have no diagram output',()=>{
  for(const project of generatedContent.additionalProjects) assert.equal(technicalDiagrams(project),'');
});

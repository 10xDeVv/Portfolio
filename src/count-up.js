// Count once per result per page visit; accessible text always keeps the final value.
export function setupResultCounters(root, seen) {
  const elements = [...root.querySelectorAll("[data-count-up]")];
  const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (!elements.length || motion.matches || !("IntersectionObserver" in window)) return () => {};

  const format = new Intl.NumberFormat("en-CA");
  const records = elements.map((element, index) => ({
    element,
    final: element.textContent,
    key: element.closest("a").getAttribute("href") + element.textContent,
    delay: index * 80,
    frame: 0,
  }));
  const showFinal = (record) => {
    cancelAnimationFrame(record.frame);
    record.element.textContent = record.final;
  };
  const animate = (record) => {
    seen.add(record.key);
    let started;
    const tick = (now) => {
      started ??= now;
      const progress = Math.min(Math.max((now - started - record.delay) / 1250, 0), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      record.element.textContent = record.final.replace(/\d[\d,]*/g, (number) =>
        format.format(Math.round(Number(number.replaceAll(",", "")) * eased))
      );
      if (progress < 1) record.frame = requestAnimationFrame(tick);
      else showFinal(record);
    };
    record.frame = requestAnimationFrame(tick);
  };
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting || entry.intersectionRatio < 0.6) continue;
      const record = records.find((item) => item.element === entry.target);
      observer.unobserve(entry.target);
      animate(record);
    }
  }, { threshold: 0.6, rootMargin: "0px 0px -12px 0px" });

  for (const record of records) {
    if (seen.has(record.key)) continue;
    record.element.textContent = record.final.replace(/\d[\d,]*/g, "0");
    observer.observe(record.element);
  }

  const onMotionChange = () => {
    if (!motion.matches) return;
    observer.disconnect();
    for (const record of records) {
      seen.add(record.key);
      showFinal(record);
    }
  };
  motion.addEventListener("change", onMotionChange);
  return () => {
    observer.disconnect();
    motion.removeEventListener("change", onMotionChange);
    records.forEach(showFinal);
  };
}

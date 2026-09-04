import { useEffect, useRef, useState } from "react";

const stats = [
  [15, "full-stack features shipped", "+"],
  [24, "REST API endpoints", "+"],
  [25, "pull requests merged", "+"],
  [43, "bugs resolved", "+"],
  [1, "research paper presented", ""],
  [65.81, "mIoU on satellite segmentation", "%"],
];

function Counter({ end }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      let start = 0;
      const step = Math.max(1, Math.ceil(end / 30));
      const timer = setInterval(() => {
        start = Math.min(end, start + step);
        setValue(start);
        if (start === end) clearInterval(timer);
      }, 25);
      observer.disconnect();
    }, { threshold: .4 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);
  return <span ref={ref}>{value}</span>;
}

function Stats() {
  return (
    <section id="stats" className="border-b border-white/10 bg-[#0b0f16]">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-white/10 lg:grid-cols-3 lg:divide-y-0">
        {stats.map(([value, label, suffix]) => (
          <div key={label} className="px-5 py-8 sm:px-8 lg:py-10">
            <div className="text-3xl font-black tracking-tight text-white sm:text-4xl"><Counter end={value} />{suffix}</div>
            <div className="mt-2 max-w-[170px] text-xs font-medium uppercase leading-5 tracking-[.12em] text-slate-500">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Stats;

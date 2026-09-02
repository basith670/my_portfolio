import research from "../../data/research";

function Research() {
  const item = research[0];
  return (
    <section id="research" className="border-b border-white/10 bg-[#0b0f16]">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <p className="font-mono text-xs font-bold uppercase tracking-[.25em] text-blue-400">06 / Research</p>
        <div className="mt-4 grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <div><h2 className="text-4xl font-black tracking-tight text-white sm:text-6xl">From model to conference room.</h2><p className="mt-6 text-sm leading-7 text-slate-500">A conference paper exploring uncertainty-aware satellite image segmentation with Evidential Deep Learning and SegFormer.</p><div className="mt-8 flex flex-wrap gap-3"><a href={item.paper} target="_blank" rel="noreferrer" className="rounded-full bg-blue-500 px-5 py-3 text-xs font-bold text-white hover:bg-blue-400">Read paper ↗</a><a href={item.certificate} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 px-5 py-3 text-xs font-bold text-slate-300 hover:text-white">Presentation certificate ↗</a></div></div>
          <article className="rounded-3xl border border-white/10 bg-[#070a0f] p-6 sm:p-8"><p className="font-mono text-xs text-blue-400">{item.type} · {item.date}</p><h3 className="mt-4 text-2xl font-black leading-tight text-white sm:text-3xl">{item.title}</h3><p className="mt-4 text-sm leading-7 text-slate-500">{item.description}</p><div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">{item.metrics.map(m => <div key={m.label} className="rounded-2xl border border-white/10 bg-white/[.03] p-4"><div className="text-xl font-black text-white">{m.value}</div><div className="mt-1 text-[10px] uppercase tracking-wider text-slate-600">{m.label}</div></div>)}</div><div className="mt-8 flex flex-wrap gap-2">{item.technologies.map(t => <span key={t} className="rounded-full bg-white/5 px-3 py-1.5 text-[11px] text-slate-500">{t}</span>)}</div></article>
        </div>
      </div>
    </section>
  );
}
export default Research;

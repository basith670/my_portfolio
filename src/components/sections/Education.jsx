import education from "../../data/education";

function Education() {
  return (
    <section id="education" className="border-b border-white/10 bg-[#070a0f]">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <p className="font-mono text-xs font-bold uppercase tracking-[.25em] text-blue-400">05 / Education</p>
        <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"><h2 className="text-4xl font-black tracking-tight text-white sm:text-6xl">Academic foundation.</h2><p className="max-w-md text-sm leading-6 text-slate-500">Formal training in computer science, supported by practical software engineering and research work.</p></div>
        <div className="mt-14 grid gap-4">{education.map((item, i) => <article key={item.id} className="grid gap-5 rounded-3xl border border-white/10 bg-[#0b0f16] p-6 sm:grid-cols-[70px_1fr_auto] sm:p-8"><div className="font-mono text-sm text-slate-600">0{i+1}</div><div><h3 className="text-xl font-black text-white">{item.degree}</h3><p className="mt-1 font-semibold text-blue-400">{item.field}</p><p className="mt-3 text-sm text-slate-400">{item.institute}</p><p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">{item.description}</p>{item.certificate && <a href={item.certificate} target="_blank" rel="noreferrer" className="mt-5 inline-block text-xs font-bold text-slate-300 hover:text-blue-400">{item.certificateLabel} ↗</a>}</div><div className="sm:text-right"><p className="font-mono text-xs text-slate-500">{item.duration}</p><p className="mt-2 text-sm font-bold text-white">{item.score}</p></div></article>)}</div>
      </div>
    </section>
  );
}
export default Education;

import programs from "../../data/programs";

function IndustryPrograms() {
  return (
    <section id="programs" className="border-b border-white/10 bg-[#0b0f16]">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-28">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"><div><p className="font-mono text-xs font-bold uppercase tracking-[.25em] text-blue-400">08 / Industry exposure</p><h2 className="mt-4 text-4xl font-black tracking-tight text-white">Beyond the codebase.</h2></div><p className="max-w-md text-sm leading-6 text-slate-500">Selected simulations and structured programs that broadened my engineering and cloud perspective.</p></div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">{programs.map((p) => <article key={p.id} className="rounded-3xl border border-white/10 p-6"><span className="font-mono text-xs text-slate-600">{p.duration}</span><h3 className="mt-5 font-bold text-white">{p.title}</h3><p className="mt-1 text-xs font-semibold text-blue-400">{p.organization}</p><p className="mt-4 text-sm leading-6 text-slate-500">{p.description}</p></article>)}</div>
      </div>
    </section>
  );
}
export default IndustryPrograms;

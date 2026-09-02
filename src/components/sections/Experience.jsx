import experience from "../../data/experience";

function Experience() {
  return (
    <section id="experience" className="border-b border-white/10 bg-[#0b0f16]">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <p className="font-mono text-xs font-bold uppercase tracking-[.25em] text-blue-400">04 / Experience</p>
        <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-6xl">Where I learned to ship.</h2>
        <div className="mt-14 border-l border-white/10">
          {experience.map((item) => (
            <article key={item.id} className="relative ml-6 pb-14 pl-7 last:pb-0 sm:ml-10 sm:pl-10">
              <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-blue-400 shadow-[0_0_18px_rgba(59,130,246,.7)]" />
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between"><div><p className="font-mono text-xs text-blue-400">{item.type}</p><h3 className="mt-2 text-2xl font-black text-white">{item.role}</h3><p className="mt-1 font-semibold text-slate-300">{item.company}</p><p className="mt-1 text-sm text-slate-600">{item.location}</p></div><span className="font-mono text-xs text-slate-500">{item.duration}</span></div>
              <ul className="mt-6 max-w-4xl space-y-3">{item.description.map((line, i) => <li key={i} className="flex gap-3 text-sm leading-7 text-slate-500"><span className="mt-3 h-1 w-1 shrink-0 rounded-full bg-blue-400" />{line}</li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Experience;

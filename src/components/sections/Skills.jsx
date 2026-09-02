import skills from "../../data/skills";

function Skills() {
  return (
    <section id="skills" className="border-b border-white/10 bg-[#0b0f16]">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div><p className="font-mono text-xs font-bold uppercase tracking-[.25em] text-blue-400">02 / Toolkit</p><h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">The stack I ship with.</h2></div>
          <p className="max-w-md text-sm leading-6 text-slate-500">A practical stack centered on Python backends, modern React frontends, relational data and production tooling.</p>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {skills.map((group, i) => (
            <div key={group.category} className="rounded-3xl border border-white/10 bg-[#070a0f] p-7 hover:border-blue-400/30 transition-colors">
              <div className="flex items-center justify-between"><h3 className="font-bold text-white">{group.category}</h3><span className="font-mono text-xs text-slate-600">0{i + 1}</span></div>
              <div className="mt-6 flex flex-wrap gap-2">{group.items.map((item) => <span key={item} className="rounded-full border border-white/10 px-3 py-1.5 text-xs font-medium text-slate-400 hover:border-blue-400/40 hover:text-blue-300">{item}</span>)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Skills;

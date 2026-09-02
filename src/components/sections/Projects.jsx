import projects from "../../data/projects";

function Projects() {
  return (
    <section id="projects" className="border-b border-white/10 bg-[#070a0f]">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between"><div><p className="font-mono text-xs font-bold uppercase tracking-[.25em] text-blue-400">03 / Selected work</p><h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-6xl">Built, deployed, learned from.</h2></div><span className="font-mono text-xs text-slate-600">{String(projects.length).padStart(2,"0")} PROJECTS</span></div>
        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <article key={project.id} className={`group overflow-hidden rounded-3xl border border-white/10 bg-[#0b0f16] ${index === 0 || index === 5 ? "lg:col-span-2" : ""}`}>
              <div className={`grid ${index === 0 || index === 5 ? "lg:grid-cols-2" : ""}`}>
                <div className="relative overflow-hidden bg-[#111722]">
                  <img src={project.image} alt={project.title} className={`w-full object-cover transition duration-700 group-hover:scale-105 ${index === 0 || index === 5 ? "aspect-[16/10] lg:aspect-auto lg:h-full" : "aspect-[16/10]"}`} />
                  <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.15em] text-white backdrop-blur">{project.status}</div>
                </div>
                <div className="flex flex-col p-6 sm:p-8">
                  <div className="font-mono text-xs text-blue-400">{project.category}</div>
                  <h3 className="mt-3 text-2xl font-black tracking-tight text-white sm:text-3xl">{project.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-500">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">{project.tech.map(t => <span key={t} className="rounded-full bg-white/5 px-2.5 py-1 text-[11px] font-medium text-slate-400">{t}</span>)}</div>
                  <div className="mt-auto flex flex-wrap gap-3 pt-8"><a href={project.github} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 px-4 py-2.5 text-xs font-bold text-slate-300 hover:border-white/25 hover:text-white">GitHub ↗</a>{project.live && <a href={project.live} target="_blank" rel="noreferrer" className="rounded-full bg-white px-4 py-2.5 text-xs font-bold text-[#070a0f] hover:bg-blue-400">Live product ↗</a>}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Projects;

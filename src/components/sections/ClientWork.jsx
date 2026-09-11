import clientWork from "../../data/clientWork";

function ClientWork() {
  return (
    <section id="client-work" className="border-b border-white/10 bg-[#0b0f16]">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[.25em] text-blue-400">
              04 / Client work
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-6xl">
              Built for real businesses.
            </h2>
          </div>

          <p className="max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            Selected production work delivered for businesses, with a focus on
            polished interfaces, responsive experiences, and real-world deployment.
          </p>
        </div>

        <div className="mt-14 space-y-5">
          {clientWork.map((work) => (
            <article
              key={work.id}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-[#070a0f]"
            >
              <div className="grid lg:grid-cols-[1.1fr_.9fr]">
                <div className="relative min-h-[280px] overflow-hidden bg-[#111722] lg:min-h-[460px]">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.15em] text-white backdrop-blur">
                    {work.status}
                  </div>
                </div>

                <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                  <p className="font-mono text-xs font-bold uppercase tracking-[.18em] text-blue-400">
                    {work.category}
                  </p>

                  <h3 className="mt-4 text-4xl font-black tracking-[-.04em] text-white sm:text-5xl">
                    {work.title}
                  </h3>

                  <p className="mt-5 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
                    {work.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {work.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-white/5 px-3 py-1.5 text-[11px] font-medium text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-9">
                    <a
                      href={work.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex rounded-full bg-white px-5 py-3 text-xs font-bold text-[#070a0f] transition hover:bg-blue-400"
                    >
                      View live website ↗
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClientWork;

import experience from "../../data/experience";

function Experience() {
  return (
    <section
      id="experience"
      className="border-b border-white/10 bg-[#0b0f16]"
    >
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <p className="font-mono text-xs font-bold uppercase tracking-[.25em] text-blue-400">
          05 / Experience
        </p>

        <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-6xl">
          Where I learned to ship.
        </h2>

        <div className="mt-14 border-l border-white/10">
          {experience.map((item) => (
            <article
              key={item.id}
              className="relative ml-6 pb-14 pl-7 last:pb-0 sm:ml-10 sm:pl-10"
            >
              {/* Timeline dot */}
              <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-blue-400 shadow-[0_0_18px_rgba(59,130,246,.7)]" />

              {/* Header */}
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="font-mono text-xs text-blue-400">
                    {item.type}
                  </p>

                  <h3 className="mt-2 text-2xl font-black text-white">
                    {item.role}
                  </h3>

                  <p className="mt-1 font-semibold text-slate-300">
                    {item.company}
                  </p>

                  <p className="mt-1 text-sm text-slate-600">
                    {item.location}
                  </p>
                </div>

                <span className="font-mono text-xs text-slate-500">
                  {item.duration}
                </span>
              </div>

              {/* Responsibilities */}
              <ul className="mt-6 max-w-4xl space-y-3">
                {item.description.map((line, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-sm leading-7 text-slate-500"
                  >
                    <span className="mt-3 h-1 w-1 shrink-0 rounded-full bg-blue-400" />
                    {line}
                  </li>
                ))}
              </ul>

              {/* Certificates */}
              {item.certificates?.length > 0 && (
                <div className="mt-10 max-w-4xl">
                  <p className="font-mono text-xs font-bold uppercase tracking-[.2em] text-slate-500">
                    Certificates
                  </p>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {item.certificates.map((certificate) => (
                      <div
                        key={certificate.title}
                        className="group rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition duration-300 hover:border-blue-400/30 hover:bg-blue-500/[0.03]"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h4 className="text-sm font-bold leading-6 text-white">
                              {certificate.title}
                            </h4>

                            <p className="mt-2 text-xs leading-5 text-slate-500">
                              {certificate.description}
                            </p>
                          </div>

                          <span className="shrink-0 text-blue-400">
                            ↗
                          </span>
                        </div>

                        <a
                          href={certificate.link}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-5 inline-flex items-center rounded-full border border-white/10 px-4 py-2 text-xs font-bold text-slate-300 transition hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-blue-300"
                        >
                          View Certificate
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
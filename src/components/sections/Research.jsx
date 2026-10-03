import research from "../../data/research";

function Research() {
  const item = research[0];

  return (
    <section
      id="research"
      className="border-b border-white/10 bg-[#0b0f16]"
    >
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <p className="font-mono text-xs font-bold uppercase tracking-[.25em] text-blue-400">
          07 / Research
        </p>

        <div className="mt-4 grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
          {/* Left column */}
          <div>
            <h2 className="text-4xl font-black tracking-tight text-white sm:text-6xl">
              From model to conference room.
            </h2>

            <p className="mt-6 text-sm leading-7 text-slate-500">
              A published IEEE conference paper exploring uncertainty-aware
              satellite image segmentation with Evidential Deep Learning and
              SegFormer.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {/* IEEE Xplore */}
              {item.publication && (
                <a
                  href={item.publication}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-blue-500 px-5 py-3 text-xs font-bold text-white transition hover:bg-blue-400"
                >
                  IEEE Xplore ↗
                </a>
              )}

              {/* Paper PDF */}
              {item.paper && (
                <a
                  href={item.paper}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 px-5 py-3 text-xs font-bold text-slate-300 transition hover:border-white/25 hover:text-white"
                >
                  Read paper ↗
                </a>
              )}

              {/* Presentation certificate */}
              {item.certificate && (
                <a
                  href={item.certificate}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 px-5 py-3 text-xs font-bold text-slate-300 transition hover:border-white/25 hover:text-white"
                >
                  Presentation certificate ↗
                </a>
              )}

              {/* Participation certificate */}
              {item.participationCertificate && (
                <a
                  href={item.participationCertificate}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 px-5 py-3 text-xs font-bold text-slate-300 transition hover:border-white/25 hover:text-white"
                >
                  Participation certificate ↗
                </a>
              )}
            </div>
          </div>

          {/* Right column */}
          <article className="rounded-3xl border border-white/10 bg-[#070a0f] p-6 sm:p-8">
            <p className="font-mono text-xs text-blue-400">
              {item.type} · {item.date}
            </p>

            <h3 className="mt-4 text-2xl font-black leading-tight text-white sm:text-3xl">
              {item.title}
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-500">
              {item.description}
            </p>

            {/* Conference details */}
            <div className="mt-6 space-y-2 text-sm">
              <p className="text-slate-400">
                <span className="font-semibold text-slate-300">
                  Conference:
                </span>{" "}
                {item.conference}
              </p>

              <p className="text-slate-400">
                <span className="font-semibold text-slate-300">
                  Authors:
                </span>{" "}
                {item.authors}
              </p>
            </div>

            {/* Metrics */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {item.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-white/10 bg-white/[.03] p-4"
                >
                  <div className="text-xl font-black text-white">
                    {metric.value}
                  </div>

                  <div className="mt-1 text-[10px] uppercase tracking-wider text-slate-600">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Technologies */}
            <div className="mt-8 flex flex-wrap gap-2">
              {item.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full bg-white/5 px-3 py-1.5 text-[11px] text-slate-500"
                >
                  {technology}
                </span>
              ))}
            </div>

            {/* Research highlights */}
            {item.highlights?.length > 0 && (
              <div className="mt-8 border-t border-white/10 pt-7">
                <p className="font-mono text-xs font-bold uppercase tracking-[.18em] text-slate-500">
                  Key Findings
                </p>

                <ul className="mt-4 space-y-3">
                  {item.highlights.map((highlight, index) => (
                    <li
                      key={index}
                      className="flex gap-3 text-sm leading-6 text-slate-500"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue-400" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        </div>
      </div>
    </section>
  );
}

export default Research;
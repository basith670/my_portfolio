import FadeIn from "../common/FadeIn";
import research from "../../data/research";

import {
  FiBookOpen,
  FiCalendar,
  FiMapPin,
  FiUsers,
  FiExternalLink,
  FiFileText,
  FiAward,
} from "react-icons/fi";

function Research() {
  return (
    <FadeIn>
      <section
        id="research"
        className="py-20 lg:py-32 bg-slate-50"
      >
        <div className="max-w-7xl mx-auto px-6">

          {/* ================= Heading ================= */}

          <div className="text-center">

            <p className="uppercase tracking-[0.25em] text-blue-600 font-semibold text-sm sm:text-base">
              Research & Publications
            </p>

            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
              Research & Publications
            </h2>

            <p className="mt-6 max-w-3xl mx-auto text-base sm:text-lg leading-7 sm:leading-8 text-slate-600">
              Research work focused on deep learning, computer vision,
              uncertainty quantification, and satellite image segmentation.
            </p>

          </div>

          {/* ================= Research Cards ================= */}

          <div className="mt-16 lg:mt-20 space-y-8">

            {research.map((item) => (

              <article
                key={item.id}
                className="bg-white rounded-2xl lg:rounded-3xl border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >

                <div className="p-6 sm:p-8 lg:p-10">

                  {/* Top Section */}

                  <div className="flex flex-col lg:flex-row lg:justify-between gap-8">

                    {/* Title */}

                    <div className="flex items-start gap-4">

                      <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-xl lg:text-2xl flex-shrink-0">
                        <FiBookOpen />
                      </div>

                      <div>

                        <span className="inline-flex px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs sm:text-sm font-semibold">
                          {item.type}
                        </span>

                        <h3 className="mt-4 text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 leading-tight">
                          {item.title}
                        </h3>

                      </div>

                    </div>

                    {/* Date */}

                    <div className="flex items-center gap-2 text-sm sm:text-base text-slate-500 lg:pt-2 flex-shrink-0">
                      <FiCalendar />
                      <span>{item.date}</span>
                    </div>

                  </div>

                  {/* Conference Information */}

                  <div className="mt-8 grid sm:grid-cols-2 gap-4">

                    <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50">
                      <FiBookOpen className="mt-1 text-blue-600 flex-shrink-0" />

                      <div>
                        <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                          Conference
                        </p>

                        <p className="mt-1 text-sm sm:text-base font-semibold text-slate-900">
                          {item.conference}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50">
                      <FiMapPin className="mt-1 text-blue-600 flex-shrink-0" />

                      <div>
                        <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                          Venue
                        </p>

                        <p className="mt-1 text-sm sm:text-base font-semibold text-slate-900">
                          {item.organizer}, {item.location}
                        </p>
                      </div>
                    </div>

                  </div>

                  {/* Authors */}

                  <div className="mt-6 flex items-start gap-3">

                    <FiUsers className="mt-1 text-blue-600 flex-shrink-0" />

                    <div>
                      <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                        Authors
                      </p>

                      <p className="mt-1 text-sm sm:text-base text-slate-700">
                        {item.authors}
                      </p>
                    </div>

                  </div>

                  {/* Description */}

                  <p className="mt-8 text-sm sm:text-base lg:text-lg leading-7 sm:leading-8 text-slate-600">
                    {item.description}
                  </p>

                  {/* Metrics */}

                  <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">

                    {item.metrics.map((metric, index) => (

                      <div
                        key={index}
                        className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200"
                      >

                        <p className="text-xl sm:text-2xl font-bold text-blue-600">
                          {metric.value}
                        </p>

                        <p className="mt-1 text-xs sm:text-sm text-slate-500">
                          {metric.label}
                        </p>

                      </div>

                    ))}

                  </div>

                  {/* Research Highlights */}

                  <div className="mt-10">

                    <h4 className="text-lg sm:text-xl font-bold text-slate-900">
                      Research Highlights
                    </h4>

                    <ul className="mt-4 space-y-3">

                      {item.highlights.map((highlight, index) => (

                        <li
                          key={index}
                          className="flex items-start gap-3 text-sm sm:text-base leading-7 text-slate-600"
                        >
                          <span className="mt-2 w-2 h-2 rounded-full bg-blue-600 flex-shrink-0" />

                          <span>{highlight}</span>
                        </li>

                      ))}

                    </ul>

                  </div>

                  {/* Technologies */}

                  <div className="mt-8">

                    <h4 className="text-lg sm:text-xl font-bold text-slate-900">
                      Research Areas & Technologies
                    </h4>

                    <div className="flex flex-wrap gap-2 mt-4">

                      {item.technologies.map((technology) => (

                        <span
                          key={technology}
                          className="px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 text-xs sm:text-sm font-medium"
                        >
                          {technology}
                        </span>

                      ))}

                    </div>

                  </div>

                  {/* Actions */}

                  <div className="mt-10 pt-6 border-t border-slate-200 flex flex-wrap gap-3">

                    <a
                      href={item.paper}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white font-semibold text-sm sm:text-base hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <FiFileText />
                      View Research Paper
                      <FiExternalLink className="text-sm" />
                    </a>

                    <a
                      href={item.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-semibold text-sm sm:text-base hover:border-blue-600 hover:text-blue-600 hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <FiAward />
                      Presentation Certificate
                      <FiExternalLink className="text-sm" />
                    </a>

                    <a
                      href={item.participationCertificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-semibold text-sm sm:text-base hover:border-blue-600 hover:text-blue-600 hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <FiAward />
                      Participation Certificate
                      <FiExternalLink className="text-sm" />
                    </a>

                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>
      </section>
    </FadeIn>
  );
}

export default Research;
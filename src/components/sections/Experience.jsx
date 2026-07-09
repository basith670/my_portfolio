import FadeIn from "../common/FadeIn";
import experience from "../../data/experience";

import { FiBriefcase, FiMapPin, FiCalendar } from "react-icons/fi";

function Experience() {
  return (
    <FadeIn>
      <section
        id="experience"
        className="py-32 bg-white"
      >
        <div className="max-w-6xl mx-auto px-6">

          {/* Heading */}

          <div className="text-center">

            <p className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
              Experience
            </p>

            <h2 className="mt-4 text-5xl font-bold text-slate-900">
              Professional Journey
            </h2>

            <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
              Internship and industry experience that strengthened my
              software engineering, collaboration and problem-solving skills.
            </p>

          </div>

          {/* Timeline */}

          <div className="relative mt-20">

            <div className="absolute left-5 top-0 w-1 h-full bg-blue-100"></div>

            <div className="space-y-12">

              {experience.map((item) => (

                <div
                  key={item.id}
                  className="relative pl-16"
                >

                  {/* Timeline Dot */}

                  <div className="absolute left-0 top-4 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg">

                    <FiBriefcase />

                  </div>

                  {/* Card */}

                  <div className="bg-slate-50 rounded-3xl p-8 shadow-md hover:shadow-xl transition duration-300">

                    <div className="flex flex-wrap justify-between gap-4">

                      <div>

                        <h3 className="text-2xl font-bold text-slate-900">
                          {item.role}
                        </h3>

                        <p className="text-blue-600 font-semibold mt-1">
                          {item.company}
                        </p>

                      </div>

                      <span className="px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-semibold h-fit">
                        {item.type}
                      </span>

                    </div>

                    <div className="flex flex-wrap gap-6 mt-5 text-slate-500">

                      <div className="flex items-center gap-2">
                        <FiCalendar />
                        {item.duration}
                      </div>

                      <div className="flex items-center gap-2">
                        <FiMapPin />
                        {item.location}
                      </div>

                    </div>

                    <ul className="mt-6 space-y-3">

                      {item.description.map((point) => (

                        <li
                          key={point}
                          className="flex gap-3 text-slate-600"
                        >
                          <span className="text-blue-600 font-bold">•</span>

                          {point}

                        </li>

                      ))}

                    </ul>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>
      </section>
    </FadeIn>
  );
}

export default Experience;
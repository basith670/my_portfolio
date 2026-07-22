import FadeIn from "../common/FadeIn";
import experience from "../../data/experience";

import {
  FiBriefcase,
  FiMapPin,
  FiCalendar,
} from "react-icons/fi";

function Experience() {
  return (
    <FadeIn>
      <section
        id="experience"
        className="py-20 lg:py-32 bg-white"
      >
        <div className="max-w-6xl mx-auto px-6">

          {/* Heading */}

          <div className="text-center">

            <p className="uppercase tracking-[0.25em] text-blue-600 font-semibold text-sm sm:text-base">
              Experience
            </p>

            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
              Professional Journey
            </h2>

            <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg leading-7 sm:leading-8 text-slate-600">
              Internship and industry experience that strengthened my
              software engineering, collaboration, and problem-solving skills.
            </p>

          </div>

          {/* Timeline */}

          <div className="relative mt-16 lg:mt-20">

            {/* Timeline Line */}

            <div className="absolute left-4 sm:left-5 top-0 w-1 h-full bg-blue-100"></div>

            <div className="space-y-10 lg:space-y-12">

              {experience.map((item) => (

                <div
                  key={item.id}
                  className="relative pl-12 sm:pl-16"
                >

                  {/* Timeline Icon */}

                  <div className="absolute left-0 top-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg">

                    <FiBriefcase className="text-sm sm:text-base" />

                  </div>

                  {/* Card */}

                  <div className="bg-slate-50 rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

                    {/* Header */}

                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">

                      <div>

                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                          {item.role}
                        </h3>

                        <p className="mt-1 text-blue-600 font-semibold text-sm sm:text-base">
                          {item.company}
                        </p>

                      </div>

                      <span className="self-start px-4 py-2 rounded-full bg-blue-600 text-white text-xs sm:text-sm font-semibold">
                        {item.type}
                      </span>

                    </div>

                    {/* Meta */}

                    <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 mt-5 text-sm sm:text-base text-slate-500">

                      <div className="flex items-center gap-2">

                        <FiCalendar />

                        <span>{item.duration}</span>

                      </div>

                      <div className="flex items-center gap-2">

                        <FiMapPin />

                        <span>{item.location}</span>

                      </div>

                    </div>

                    {/* Description */}

                    <ul className="mt-6 space-y-3">

                      {item.description.map((point) => (

                        <li
                          key={point}
                          className="flex gap-3 text-sm sm:text-base leading-7 text-slate-600"
                        >

                          <span className="text-blue-600 font-bold">
                            •
                          </span>

                          <span>{point}</span>

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
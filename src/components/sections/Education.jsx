import FadeIn from "../common/FadeIn";
import education from "../../data/education";

import {
  FiBookOpen,
  FiCalendar,
  FiAward,
} from "react-icons/fi";

function Education() {
  return (
    <FadeIn>
      <section
        id="education"
        className="py-20 lg:py-32 bg-slate-50"
      >
        <div className="max-w-6xl mx-auto px-6">

          {/* Heading */}

          <div className="text-center">

            <p className="uppercase tracking-[0.25em] text-blue-600 font-semibold text-sm sm:text-base">
              Education
            </p>

            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
              Academic Background
            </h2>

            <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg leading-7 sm:leading-8 text-slate-600">
              My academic journey has provided a strong foundation in
              software engineering, computer science and modern web
              development.
            </p>

          </div>

          {/* Education Cards */}

          <div className="grid gap-8 lg:gap-10 mt-16 lg:mt-20">

            {education.map((item) => (

              <div
                key={item.id}
                className="bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-md border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >

                {/* Header */}

                <div className="flex flex-col lg:flex-row lg:justify-between gap-6">

                  {/* Left */}

                  <div className="flex items-start gap-4">

                    <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-xl lg:text-2xl flex-shrink-0">

                      <FiBookOpen />

                    </div>

                    <div>

                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                        {item.degree}
                      </h3>

                      <p className="mt-1 text-blue-600 font-semibold text-sm sm:text-base">
                        {item.field}
                      </p>

                    </div>

                  </div>

                  {/* Right */}

                  <div className="flex flex-col lg:items-end gap-3">

                    <div className="flex items-center gap-2 text-sm sm:text-base text-slate-500">

                      <FiCalendar />

                      <span>{item.duration}</span>

                    </div>

                    <div className="flex items-center gap-2 text-sm sm:text-base text-blue-600 font-semibold">

                      <FiAward />

                      <span>{item.score}</span>

                    </div>

                  </div>

                </div>

                {/* Institute */}

                <h4 className="mt-8 text-lg sm:text-xl font-semibold text-slate-900">
                  {item.institute}
                </h4>

                {/* Description */}

                <p className="mt-4 text-sm sm:text-base leading-7 sm:leading-8 text-slate-600">
                  {item.description}
                </p>

              </div>

            ))}

          </div>

        </div>
      </section>
    </FadeIn>
  );
}

export default Education;
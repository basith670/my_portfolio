import FadeIn from "../common/FadeIn";
import programs from "../../data/programs";

import {
  FiCpu,
  FiCalendar,
  FiArrowRight,
} from "react-icons/fi";

function IndustryPrograms() {
  return (
    <FadeIn>
      <section
        id="Programs"
        className="py-20 lg:py-32 bg-slate-50"
      >
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}

          <div className="text-center">

            <p className="uppercase tracking-[0.25em] text-blue-600 font-semibold text-sm sm:text-base">
              Industry Exposure
            </p>

            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
              Industry Programs
            </h2>

            <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg leading-7 sm:leading-8 text-slate-600">
              Practical learning experiences through industry-recognized
              programs and virtual internships.
            </p>

          </div>

          {/* Program Cards */}

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mt-16 lg:mt-20">

            {programs.map((program) => (

              <div
                key={program.id}
                className="bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >

                {/* Icon */}

                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-2xl lg:text-3xl">

                  <FiCpu />

                </div>

                {/* Title */}

                <h3 className="mt-6 lg:mt-8 text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                  {program.title}
                </h3>

                {/* Organization */}

                <p className="mt-2 lg:mt-3 text-blue-600 font-semibold text-sm sm:text-base">
                  {program.organization}
                </p>

                {/* Duration */}

                <div className="flex items-center gap-2 mt-4 text-slate-500 text-sm sm:text-base">

                  <FiCalendar />

                  <span>{program.duration}</span>

                </div>

                {/* Description */}

                <p className="mt-5 lg:mt-6 text-sm sm:text-base text-slate-600 leading-7">
                  {program.description}
                </p>

                {/* Footer */}

                <div className="mt-6 lg:mt-8 inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all duration-300 cursor-pointer">

                  Learn More

                  <FiArrowRight />

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>
    </FadeIn>
  );
}

export default IndustryPrograms;
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
        className="py-32 bg-slate-50"
      >
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <p className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
              Industry Exposure
            </p>

            <h2 className="mt-4 text-5xl font-bold text-slate-900">
              Industry Programs
            </h2>

            <p className="mt-6 max-w-2xl mx-auto text-slate-600">
              Practical learning experiences through industry-recognized
              programs and virtual internships.
            </p>

          </div>

          <div className="grid lg:grid-cols-3 gap-8 mt-20">

            {programs.map((program) => (

              <div
                key={program.id}
                className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300"
              >

                <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-3xl">

                  <FiCpu />

                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  {program.title}
                </h3>

                <p className="mt-3 text-blue-600 font-semibold">
                  {program.organization}
                </p>

                <div className="flex items-center gap-2 mt-4 text-slate-500">

                  <FiCalendar />

                  {program.duration}

                </div>

                <p className="mt-6 text-slate-600 leading-7">
                  {program.description}
                </p>

                <div className="mt-8 flex items-center gap-2 text-blue-600 font-semibold">

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
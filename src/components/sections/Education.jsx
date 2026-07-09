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
        className="py-32 bg-slate-50"
      >
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center">

            <p className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
              Education
            </p>

            <h2 className="mt-4 text-5xl font-bold text-slate-900">
              Academic Background
            </h2>

            <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
              My academic journey has provided a strong foundation in
              software engineering, computer science and modern web
              development.
            </p>

          </div>

          <div className="grid gap-10 mt-20">

            {education.map((item) => (

              <div
                key={item.id}
                className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition duration-300 border border-slate-200"
              >

                <div className="flex flex-wrap justify-between gap-5">

                  <div>

                    <div className="flex items-center gap-3">

                      <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-2xl">

                        <FiBookOpen />

                      </div>

                      <div>

                        <h3 className="text-2xl font-bold text-slate-900">

                          {item.degree}

                        </h3>

                        <p className="text-blue-600 font-semibold">

                          {item.field}

                        </p>

                      </div>

                    </div>

                  </div>

                  <div className="text-right">

                    <div className="flex items-center justify-end gap-2 text-slate-500">

                      <FiCalendar />

                      {item.duration}

                    </div>

                    <div className="flex items-center justify-end gap-2 mt-3 text-blue-600 font-semibold">

                      <FiAward />

                      {item.score}

                    </div>

                  </div>

                </div>

                <h4 className="mt-8 text-xl font-semibold text-slate-900">

                  {item.institute}

                </h4>

                <p className="mt-4 text-slate-600 leading-8">

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
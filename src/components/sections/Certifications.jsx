import FadeIn from "../common/FadeIn";
import certifications from "../../data/certifications";

import {
  FiAward,
  FiExternalLink,
} from "react-icons/fi";

function Certifications() {
  return (
    <FadeIn>
      <section
        id="certifications"
        className="py-32 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <p className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
              Certifications
            </p>

            <h2 className="mt-4 text-5xl font-bold text-slate-900">
              Professional Certifications
            </h2>

            <p className="mt-6 max-w-2xl mx-auto text-slate-600">
              Certifications and industry-recognized credentials that
              demonstrate continuous learning and technical expertise.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

            {certifications.map((item) => (

              <div
                key={item.id}
                className="bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:-translate-y-2 hover:shadow-2xl transition duration-300"
              >

                <div
                  className={`w-16 h-16 rounded-2xl ${item.color} text-white flex items-center justify-center text-3xl`}
                >
                  <FiAward />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-blue-600 font-semibold">
                  {item.issuer}
                </p>

                <p className="mt-2 text-slate-500">
                  {item.year}
                </p>

                <a
                  href={item.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700"
                >
                  View Certificate

                  <FiExternalLink />

                </a>

              </div>

            ))}

          </div>

        </div>
      </section>
    </FadeIn>
  );
}

export default Certifications;
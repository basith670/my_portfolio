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
        className="py-20 lg:py-32 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}

          <div className="text-center">

            <p className="uppercase tracking-[0.25em] text-blue-600 font-semibold text-sm sm:text-base">
              Certifications
            </p>

            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
              Professional Certifications
            </h2>

            <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg leading-7 sm:leading-8 text-slate-600">
              Certifications and industry-recognized credentials that
              demonstrate continuous learning and technical expertise.
            </p>

          </div>

          {/* Cards */}

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mt-16 lg:mt-20">

            {certifications.map((item) => (

              <div
                key={item.id}
                className="bg-slate-50 rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-slate-200 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
              >

                {/* Icon */}

                <div
                  className={`w-14 h-14 lg:w-16 lg:h-16 rounded-2xl ${item.color} text-white flex items-center justify-center text-2xl lg:text-3xl`}
                >
                  <FiAward />
                </div>

                {/* Title */}

                <h3 className="mt-6 lg:mt-8 text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                  {item.title}
                </h3>

                {/* Issuer */}

                <p className="mt-2 lg:mt-3 text-blue-600 font-semibold text-sm sm:text-base">
                  {item.issuer}
                </p>

                {/* Year */}

                <p className="mt-2 text-sm sm:text-base text-slate-500">
                  {item.year}
                </p>

                {/* Button */}

                <a
                  href={item.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 lg:mt-8 inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300"
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
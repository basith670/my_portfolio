import FadeIn from "../common/FadeIn";
import {
  FaGithub,
  FaLinkedin,
  FaHackerrank,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <FadeIn>
      <section
        id="contact"
        className="py-20 lg:py-28 bg-slate-50"
      >
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}

          <div className="text-center">

            <p className="uppercase tracking-[0.25em] text-blue-600 font-semibold text-sm sm:text-base">
              Contact
            </p>

            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
              Let's Build Something Great
            </h2>

            <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg leading-7 sm:leading-8 text-slate-600">
              I'm actively looking for Software Engineer and Python Full Stack
              Developer opportunities. Feel free to connect with me.
            </p>

          </div>

          {/* Contact Card */}

          <div className="mt-16 lg:mt-20 bg-white rounded-2xl lg:rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10">

            <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">

              {/* Left */}

              <div className="space-y-8">

                <div className="flex items-center gap-4">

                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 text-xl flex-shrink-0">
                    <FaPhoneAlt />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">Phone</p>
                    <p className="text-base sm:text-lg font-medium text-slate-900">
                      +91 9048884058
                    </p>
                  </div>

                </div>

                <div className="flex items-center gap-4">

                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 text-xl flex-shrink-0">
                    <MdEmail />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">Email</p>
                    <p className="text-base sm:text-lg font-medium break-all text-slate-900">
                      basithkdrbk@gmail.com
                    </p>
                  </div>

                </div>

                <div className="flex items-center gap-4">

                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 text-xl flex-shrink-0">
                    <FaMapMarkerAlt />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">Location</p>
                    <p className="text-base sm:text-lg font-medium text-slate-900">
                      Chennai, India
                    </p>
                  </div>

                </div>

              </div>

              {/* Right */}

              <div className="flex flex-col justify-center">

                <h3 className="text-2xl font-bold text-slate-900 mb-8">
                  Connect With Me
                </h3>

                <div className="flex flex-wrap gap-5 text-3xl sm:text-4xl">

                  <a
                    href="https://github.com/basith670"
                    target="_blank"
                    rel="noreferrer"
                    className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300"
                  >
                    <FaGithub />
                  </a>

                  <a
                    href="https://linkedin.com/in/muhammad-basith-k-13307034b"
                    target="_blank"
                    rel="noreferrer"
                    className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300"
                  >
                    <FaLinkedin />
                  </a>

                  <a
                    href="https://www.hackerrank.com/mk0227"
                    target="_blank"
                    rel="noreferrer"
                    className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300"
                  >
                    <FaHackerrank />
                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>
    </FadeIn>
  );
}

export default Contact;
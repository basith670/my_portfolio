import FadeIn from "../common/FadeIn";
import Button from "../common/Button";
import Typewriter from "../common/Typewriter";

import {
  FaGithub,
  FaLinkedin,
  FaHackerrank,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

function Hero() {
  return (
    <FadeIn>
      <section
        id="home"
        className="min-h-screen flex items-center pt-28 pb-12 bg-gradient-to-b from-slate-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* ================= Left ================= */}

            <div>

              <p className="text-blue-600 font-semibold uppercase tracking-[0.25em] text-sm sm:text-base">
                HELLO, I'M
              </p>

              <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-slate-900">
                Muhammad
                <br />
                Basith K
              </h1>

              {/* Fixed height prevents layout jump */}
              <div className="mt-6 min-h-[48px] sm:min-h-[56px]">

                <Typewriter
                  words={[
                    "Software Engineer",
                    "Python Full Stack Developer",
                    "React Developer",
                    "Problem Solver",
                  ]}
                  typingSpeed={60}
                  deletingSpeed={35}
                  delaySpeed={2000}
                  className="text-xl sm:text-2xl lg:text-3xl font-semibold text-blue-600"
                />

              </div>

              <p className="mt-8 max-w-xl text-base sm:text-lg leading-7 sm:leading-8 text-slate-600">
                Passionate about building scalable, secure and responsive
                web applications using React, Django, Django REST Framework,
                and PostgreSQL. I enjoy solving real-world problems through
                clean architecture and modern software engineering.
              </p>

              {/* Buttons */}

              <div className="flex flex-col sm:flex-row gap-4 mt-10">

                <Button
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = "/resume/Muhammad_Basith_Resume.pdf";
                    link.download = "Muhammad_Basith_Resume.pdf";
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  Download CV
                </Button>

                <Button
                  href="#projects"
                  variant="secondary"
                >
                  Explore Projects
                </Button>

              </div>

              {/* Social Icons */}

              <div className="flex items-center flex-wrap gap-6 mt-10 text-2xl sm:text-3xl">

                <a
                  href="https://github.com/basith670"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-slate-600 transition-all duration-300 hover:text-blue-600 hover:-translate-y-1"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://linkedin.com/in/muhammad-basith-k-13307034b"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-slate-600 transition-all duration-300 hover:text-blue-600 hover:-translate-y-1"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://www.hackerrank.com/mk0227"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="HackerRank"
                  className="text-slate-600 transition-all duration-300 hover:text-blue-600 hover:-translate-y-1"
                >
                  <FaHackerrank />
                </a>

                <a
                  href="mailto:basithkdrbk@gmail.com"
                  aria-label="Email"
                  className="text-slate-600 transition-all duration-300 hover:text-blue-600 hover:-translate-y-1"
                >
                  <MdEmail />
                </a>

              </div>

              {/* Tech Stack */}

              <div className="flex flex-wrap gap-3 mt-8">

                {[
                  "Python",
                  "React",
                  "Django",
                  "DRF",
                  "PostgreSQL",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium transition-all duration-300 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:scale-105 hover:-translate-y-1"
                  >
                    {tech}
                  </span>
                ))}

              </div>

            </div>

            {/* ================= Right ================= */}

            <div className="flex justify-center mt-12 lg:mt-0">

              <div className="relative animate-float">

                {/* Blue Glow */}

                <div className="absolute inset-0 rounded-full bg-blue-400 opacity-10 blur-2xl scale-110"></div>

                {/* Profile */}

                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden border-8 border-white shadow-2xl hover:scale-105 transition-transform duration-500">

                  <img
                    src="/images/profile.png"
                    alt="Muhammad Basith"
                    className="w-full h-full object-cover"
                    loading="eager"
                    draggable={false}
                  />

                </div>

                {/* Available */}

                <div className="absolute top-4 left-0 sm:-left-6 lg:-left-10 bg-white rounded-xl shadow-xl px-3 sm:px-5 py-2 sm:py-3">

                  <div className="flex items-center gap-2">

                    <span className="w-3 h-3 rounded-full bg-green-500 animate-ping absolute"></span>

                    <span className="w-3 h-3 rounded-full bg-green-500"></span>

                    <p className="font-semibold text-green-700 text-xs sm:text-sm">
                      Available for Work
                    </p>

                  </div>

                </div>

                {/* Experience */}

                <div className="absolute -top-4 sm:-top-6 lg:-top-8 right-2 sm:right-6 lg:right-10 bg-white rounded-xl shadow-xl px-3 sm:px-5 py-2 sm:py-3">

                  <h3 className="text-xl sm:text-2xl font-bold text-blue-600">
                    1+
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm">
                    Years Learning
                  </p>

                </div>

                {/* Projects */}

                <div className="absolute bottom-2 sm:bottom-6 lg:bottom-8 right-0 sm:-right-4 lg:-right-10 bg-white rounded-xl shadow-xl px-4 sm:px-6 py-3 sm:py-4 text-center">

                  <h3 className="text-2xl sm:text-3xl font-bold text-blue-600">
                    10+
                  </h3>

                  <p className="text-slate-600 text-sm">
                    Projects
                  </p>

                </div>

              </div>

            </div>

          </div>
        </div>
      </section>
    </FadeIn>
  );
}

export default Hero;
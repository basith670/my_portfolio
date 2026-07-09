import FadeIn from "../common/FadeIn";
import Button from "../common/Button";
import { TypeAnimation } from "react-type-animation";

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
      className="min-h-screen flex items-center pt-20 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ================= Left ================= */}

          <div>

            <p className="text-blue-600 font-semibold uppercase tracking-[0.25em]">
              HELLO, I'M
            </p>

            <h1 className="mt-4 text-6xl lg:text-7xl font-extrabold leading-tight text-slate-900">
              Muhammad
              <br />
              Basith K
            </h1>

            <div className="mt-6">
            <TypeAnimation
                sequence={[
                "Software Engineer",
                1800,
                "Python Full Stack Developer",
                1800,
                "React Developer",
                1800,
                "Problem Solver",
                1800,
                ]}
                wrapper="h2"
                speed={45}
                repeat={Infinity}
                className="text-3xl font-semibold text-blue-600"
            />
            </div>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
              Passionate about building scalable, secure and responsive
              web applications using React, Django, Django REST Framework,
              and PostgreSQL. I enjoy solving real-world problems through
              clean architecture and modern software engineering.
            </p>

            {/* Buttons */}

            <div className="flex flex-wrap gap-5 mt-10">

            <Button
                onClick={() => {
                    const link = document.createElement("a");
                    link.href = "/resume/Muhammad_Basith_Resume.pdf";
                    link.setAttribute("download", "Muhammad_Basith_Resume.pdf");
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

            <div className="flex items-center gap-6 mt-10 text-2xl">

              <a
                href="https://github.com/basith670"
                target="_blank"
                rel="noreferrer"
                className="text-slate-600 hover:text-blue-600 transition duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/muhammad-basith-k-13307034b"
                target="_blank"
                rel="noreferrer"
                className="text-slate-600 hover:text-blue-600 transition duration-300"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://www.hackerrank.com/mk0227"
                target="_blank"
                rel="noreferrer"
                className="text-slate-600 hover:text-blue-600 transition duration-300"
              >
                <FaHackerrank />
              </a>

              <a
                href="mailto:basithkdrbk@gmail.com"
                className="text-slate-600 hover:text-blue-600 transition duration-300"
              >
                <MdEmail />
              </a>

            </div>

            {/* Tech Stack */}

            <div className="flex flex-wrap gap-3 mt-10">

              {[
                "Python",
                "React",
                "Django",
                "DRF",
                "PostgreSQL",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium hover:scale-110 hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  {tech}
                </span>
              ))}

            </div>

          </div>

         {/* ================= Right ================= */}

<div className="flex justify-center">

<div className="relative animate-float">

  {/* Blue Glow */}

  <div className="absolute inset-0 rounded-full bg-blue-400 opacity-10 blur-2xl scale-110"></div>

  {/* Profile Image */}

  <div className="relative w-[420px] h-[420px] rounded-full overflow-hidden border-8 border-white shadow-2xl hover:scale-105 transition duration-500">

    <img
      src="/images/profile.png"
      alt="Muhammad Basith"
      className="w-full h-full object-cover"
    />

  </div>

  {/* Available Badge */}

  <div className="absolute top-6 -left-10 bg-white rounded-2xl shadow-xl px-5 py-3">

  <div className="flex items-center gap-2">

<span className="w-3 h-3 rounded-full bg-green-500 animate-ping absolute"></span>

<span className="w-3 h-3 rounded-full bg-green-500"></span>

<p className="font-semibold text-green-700">
  Available for Work
</p>

</div>

  </div>

  <div className="absolute -top-8 right-10 bg-white rounded-2xl shadow-xl px-5 py-3">
    <h3 className="text-2xl font-bold text-blue-600">1+</h3>
    <p className="text-slate-600 text-sm">
        Years Learning
    </p>
    </div>

  {/* Projects Card */}

  <div className="absolute bottom-8 -right-10 bg-white rounded-2xl shadow-xl px-6 py-4 text-center">

    <h3 className="text-3xl font-bold text-blue-600">
      10+
    </h3>

    <p className="text-slate-600">
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
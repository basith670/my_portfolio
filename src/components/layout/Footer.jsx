import {
  FaGithub,
  FaLinkedin,
  FaHackerrank,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-900 text-white">

      <div className="max-w-7xl mx-auto px-6 py-14 lg:py-16">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          {/* Left */}

          <div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-500">
              MB
            </h2>

            <p className="mt-6 text-sm sm:text-base leading-7 sm:leading-8 text-slate-400 max-w-sm">
              Software Engineer specializing in Python Full Stack Development,
              building scalable web applications with React, Django and
              PostgreSQL.
            </p>

          </div>

          {/* Center */}

          <div>

            <h3 className="text-xl font-bold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-slate-400">

              <li>
                <a
                  href="#home"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#skills"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  Skills
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#experience"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  Experience
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Right */}

          <div>

            <h3 className="text-xl font-bold mb-6">
              Connect
            </h3>

            <div className="flex flex-wrap gap-4">

              <a
                href="https://github.com/basith670"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center text-xl transition-all duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/muhammad-basith-k-13307034b"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center text-xl transition-all duration-300"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://hackerrank.com/mk0227"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center text-xl transition-all duration-300"
              >
                <FaHackerrank />
              </a>

            </div>

            <a
              href="#home"
              className="mt-8 inline-flex items-center gap-3 text-blue-400 hover:text-blue-300 transition-colors duration-300"
            >

              <FaArrowUp />

              <span>Back to Top</span>

            </a>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-slate-700 mt-12 lg:mt-14 pt-6 lg:pt-8 text-center text-sm sm:text-base text-slate-500">

          © {new Date().getFullYear()} Muhammad Basith K. All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}

export default Footer;
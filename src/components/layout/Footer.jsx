import {
    FaGithub,
    FaLinkedin,
    FaHackerrank,
    FaArrowUp,
  } from "react-icons/fa";
  
  function Footer() {
    return (
      <footer className="bg-slate-900 text-white">
  
        <div className="max-w-7xl mx-auto px-6 py-16">
  
          <div className="grid md:grid-cols-3 gap-10">
  
            {/* Left */}
  
            <div>
  
              <h2 className="text-4xl font-extrabold text-blue-500">
                MB
              </h2>
  
              <p className="mt-6 leading-8 text-slate-400">
  
                Software Engineer specializing in
                Python Full Stack Development,
                building scalable web applications
                with React, Django and PostgreSQL.
  
              </p>
  
            </div>
  
            {/* Center */}
  
            <div>
  
              <h3 className="text-xl font-bold mb-6">
                Quick Links
              </h3>
  
              <ul className="space-y-4 text-slate-400">
  
                <li><a href="#home">Home</a></li>
  
                <li><a href="#about">About</a></li>
  
                <li><a href="#skills">Skills</a></li>
  
                <li><a href="#projects">Projects</a></li>
  
                <li><a href="#experience">Experience</a></li>
  
                <li><a href="#contact">Contact</a></li>
  
              </ul>
  
            </div>
  
            {/* Right */}
  
            <div>
  
              <h3 className="text-xl font-bold mb-6">
  
                Connect
  
              </h3>
  
              <div className="flex gap-5 text-3xl">
  
                <a
                  href="https://github.com/basith670"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>
  
                <a
                  href="https://linkedin.com/in/muhammad-basith-k-13307034b"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                </a>
  
                <a
                  href="https://hackerrank.com/mk0227"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaHackerrank />
                </a>
  
              </div>
  
              <a
                href="#home"
                className="mt-10 inline-flex items-center gap-3 text-blue-400 hover:text-blue-300"
              >
  
                <FaArrowUp />
  
                Back to Top
  
              </a>
  
            </div>
  
          </div>
  
          <div className="border-t border-slate-700 mt-14 pt-8 text-center text-slate-500">
  
            © {new Date().getFullYear()} Muhammad Basith K.
            All Rights Reserved.
  
          </div>
  
        </div>
  
      </footer>
    );
  }
  
  export default Footer;
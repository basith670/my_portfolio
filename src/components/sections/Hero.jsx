import { FaGithub, FaLinkedin, FaHackerrank } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Typewriter from "../common/Typewriter";

function Hero() {
  return (
    <section id="home" className="noise grid-bg relative overflow-hidden border-b border-white/10 bg-[#070a0f] pt-28">
      <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-blue-600/15 blur-3xl" />
      <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="relative mx-auto grid min-h-[calc(100vh-76px)] max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 lg:grid-cols-[1.15fr_.85fr] lg:py-20">
        <div>
          <div className="mb-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[.22em] text-blue-400">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_16px_rgba(52,211,153,.8)]" />
            Open to Software Engineering opportunities
          </div>

          <p className="text-sm font-medium text-slate-500">SOFTWARE ENGINEER · PYTHON / FULL STACK</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-black tracking-[-.055em] text-white sm:text-7xl lg:text-[6.5rem] lg:leading-[.92]">
            I build software
            <span className="block text-slate-500">that survives</span>
            <span className="block text-blue-400">production.</span>
          </h1>

          <div className="mt-8 h-9 text-lg font-semibold text-slate-300 sm:text-2xl">
            <Typewriter words={["Python Full Stack Developer", "Backend Engineer", "React / Next.js Developer", "Problem Solver"]} typingSpeed={58} deletingSpeed={34} delaySpeed={1600} className="text-inherit" />
          </div>

          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            I design secure REST APIs, responsive interfaces, and database-backed systems with Python, Django, DRF, React, Next.js and PostgreSQL — with a bias toward clean architecture and real-world reliability.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="rounded-full bg-blue-500 px-6 py-3.5 text-center text-sm font-bold text-white shadow-lg shadow-blue-500/20 hover:bg-blue-400">Explore selected work ↗</a>
            <a href="/resume/Muhammad_Basith_Resume.pdf" download className="rounded-full border border-white/15 px-6 py-3.5 text-center text-sm font-bold text-slate-200 hover:border-white/30 hover:bg-white/5">Download resume</a>
          </div>

          <div className="mt-10 flex items-center gap-5 text-xl text-slate-500">
            <a aria-label="GitHub" href="https://github.com/basith670" target="_blank" rel="noreferrer" className="hover:text-white"> <FaGithub /> </a>
            <a aria-label="LinkedIn" href="https://linkedin.com/in/muhammad-basith-k-13307034b" target="_blank" rel="noreferrer" className="hover:text-white"> <FaLinkedin /> </a>
            <a aria-label="HackerRank" href="https://www.hackerrank.com/mk0227" target="_blank" rel="noreferrer" className="hover:text-white"> <FaHackerrank /> </a>
            <a aria-label="Email" href="mailto:basithkdrbk@gmail.com" className="hover:text-white"> <MdEmail /> </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="float-slow relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d121a] p-3 shadow-2xl shadow-black/40">
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#111722]">
              <img src="/images/profile.png" alt="Muhammad Basith" className="aspect-[4/5] w-full object-cover object-top opacity-90 grayscale-[15%]" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#070a0f] via-[#070a0f]/70 to-transparent p-6 pt-24">
                <div className="font-mono text-xs text-blue-300">~/basith/portfolio</div>
                <div className="mt-2 text-xl font-bold text-white">Build. Debug. Ship.</div>
              </div>
            </div>
            <div className="absolute left-0 top-8 -translate-x-3 rounded-2xl border border-white/10 bg-[#111722]/95 p-4 shadow-xl backdrop-blur">
              <div className="font-mono text-[10px] text-slate-500">STATUS</div>
              <div className="mt-1 flex items-center gap-2 text-xs font-bold text-emerald-400"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> AVAILABLE</div>
            </div>
            <div className="absolute bottom-8 right-0 translate-x-3 rounded-2xl border border-white/10 bg-[#111722]/95 px-4 py-3 shadow-xl backdrop-blur">
              <div className="font-mono text-[10px] text-slate-500">STACK</div>
              <div className="mt-1 text-xs font-bold text-white">Python · React · Django</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;

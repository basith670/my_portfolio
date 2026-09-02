import { FaCode, FaServer, FaDatabase, FaCogs } from "react-icons/fa";

const cards = [
  [FaCode, "Frontend", "React.js · Next.js · JavaScript · Tailwind CSS"],
  [FaServer, "Backend", "Python · Django · DRF · REST APIs · JWT"],
  [FaDatabase, "Data", "PostgreSQL · MySQL · SQLite"],
  [FaCogs, "Engineering", "Git · API integration · debugging · clean architecture"],
];

function About() {
  return (
    <section id="about" className="border-b border-white/10 bg-[#070a0f]">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[.25em] text-blue-400">01 / Profile</p>
            <h2 className="mt-5 text-4xl font-black tracking-[-.04em] text-white sm:text-6xl">Engineering with a bias for <span className="text-slate-500">shipping.</span></h2>
          </div>
          <div>
            <p className="text-xl leading-9 text-slate-300 sm:text-2xl">I’m a Computer Science graduate focused on building dependable full-stack products — from database models and authentication to API design, responsive UI, deployment and production debugging.</p>
            <p className="mt-7 max-w-3xl leading-8 text-slate-500">My work spans recruitment, travel, healthcare, education and geospatial/ML systems. I care about the details recruiters eventually experience as users: clear interfaces, predictable APIs, sensible data models, and software that behaves well outside a demo environment.</p>
          </div>
        </div>
        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(([Icon, title, text]) => (
            <div key={title} className="bg-[#0b0f16] p-7 hover:bg-[#101620] transition-colors">
              <Icon className="text-xl text-blue-400" />
              <h3 className="mt-6 font-bold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-500">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default About;

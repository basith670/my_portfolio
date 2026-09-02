function Footer() {
  return <footer className="border-t border-white/10 bg-[#070a0f]"><div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 text-xs text-slate-600 sm:px-8 sm:flex-row sm:items-center sm:justify-between"><span>© {new Date().getFullYear()} Muhammad Basith K.</span><span className="font-mono">Python · Django · React · Next.js</span><a href="#home" className="text-slate-400 hover:text-white">Back to top ↑</a></div></footer>;
}
export default Footer;

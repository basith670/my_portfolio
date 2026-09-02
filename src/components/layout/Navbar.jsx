import { useEffect, useRef, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import navigation from "../../constants/navigation";

function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const close = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) setOpen(false);
    };
    const escape = (event) => event.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", close);
    document.addEventListener("keydown", escape);
    return () => { document.removeEventListener("mousedown", close); document.removeEventListener("keydown", escape); };
  }, []);

  const links = navigation.filter((item) => item.link !== "home");

  return (
    <header ref={menuRef} className="fixed top-0 inset-x-0 z-50 border-b border-white/10 bg-[#070a0f]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#home" onClick={() => setOpen(false)} className="group flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-sm font-black text-[#070a0f] transition-transform group-hover:-rotate-6">MB</span>
          <span className="hidden sm:block text-sm font-semibold tracking-wide text-slate-200">MUHAMMAD BASITH K</span>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((item) => (
            <a key={item.id} href={`#${item.link.toLowerCase()}`} className="reveal-line py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors">
              {item.title}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href="#contact" className="rounded-full border border-white/15 bg-white px-5 py-2.5 text-sm font-bold text-[#070a0f] hover:bg-blue-400 transition-colors">Let’s talk <span aria-hidden>↗</span></a>
        </div>

        <button type="button" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)} className="lg:hidden rounded-xl border border-white/10 p-2 text-slate-200">
          {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-white/10 bg-[#0b0f16] px-5 py-5">
          <div className="grid gap-1">
            {navigation.map((item) => (
              <a key={item.id} href={`#${item.link.toLowerCase()}`} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white">
                {item.title}
              </a>
            ))}
            <a href="/resume/Muhammad_Basith_Resume.pdf" download onClick={() => setOpen(false)} className="mt-2 rounded-xl bg-blue-500 px-4 py-3 text-center text-sm font-bold text-white">Download Resume</a>
          </div>
        </nav>
      )}
    </header>
  );
}
export default Navbar;

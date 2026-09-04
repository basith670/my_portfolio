import { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const resumes = [
  {
    id: "fullstack",
    label: "Full Stack Developer",
    sublabel: "Python · Django · React",
    file: "/resume/Muhammad_Basith_Resume.pdf",
  },
  {
    id: "aiml",
    label: "AI / ML Engineer",
    sublabel: "PyTorch · Computer Vision",
    file: "/resume/Muhammad_Basith_AIML_Resume.pdf",
  },
];

function ResumeDownload({ variant = "primary", className = "", onNavigate }) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const close = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) setOpen(false);
    };
    const escape = (event) => event.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", close);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("mousedown", close);
      document.removeEventListener("keydown", escape);
    };
  }, []);

  const baseClasses =
    variant === "primary"
      ? "rounded-full border border-white/15 px-6 py-3.5 text-sm font-bold text-slate-200 hover:border-white/30 hover:bg-white/5"
      : "rounded-xl bg-blue-500 px-4 py-3 text-sm font-bold text-white hover:bg-blue-400";

  return (
    <div ref={wrapperRef} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={`flex w-full items-center justify-center gap-2 ${baseClasses}`}
      >
        Download resume
        <FaChevronDown className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute left-0 right-0 z-50 mt-2 overflow-hidden rounded-2xl border border-white/10 bg-[#0d121a] shadow-2xl shadow-black/40 sm:left-auto sm:right-0 sm:w-72">
          {resumes.map((resume) => (
            <a
              key={resume.id}
              href={resume.file}
              download
              onClick={() => {
                setOpen(false);
                onNavigate?.();
              }}
              className="flex flex-col gap-0.5 border-b border-white/5 px-5 py-3.5 text-left last:border-b-0 hover:bg-white/5"
            >
              <span className="text-sm font-bold text-white">{resume.label}</span>
              <span className="text-xs text-slate-500">{resume.sublabel}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default ResumeDownload;
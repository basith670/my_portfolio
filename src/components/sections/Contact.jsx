import {
  FaGithub,
  FaLinkedin,
  FaHackerrank,
} from "react-icons/fa";
import {
  MdEmail,
  MdLocationOn,
  MdWorkOutline,
  MdPhone,
} from "react-icons/md";

function Contact() {
  return (
    <section
      id="contact"
      className="border-b border-white/10 bg-[#0b0f16]"
    >
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-28">

        {/* Header */}
        <div className="grid gap-12 lg:grid-cols-[1.2fr_.8fr] lg:items-center">

          {/* Left */}
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[.25em] text-blue-400">
              09 / Contact
            </p>

            <h2 className="mt-5 max-w-4xl text-5xl font-black tracking-[-.05em] text-white sm:text-6xl lg:text-7xl">
              Have a product problem{" "}
              <span className="text-blue-400">
                worth solving?
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              I’m actively exploring Software Engineer, Full Stack Developer
              and ML/Applied Research opportunities.
            </p>

            {/* CTA */}
            <a
              href="mailto:basithkdrbk@gmail.com"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-6 py-3 text-sm font-bold text-blue-300 transition-all duration-300 hover:border-blue-400/60 hover:bg-blue-500/20 hover:text-white"
            >
              Let’s start a conversation
              <span>↗</span>
            </a>
          </div>

          {/* Right - Contact Card */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">

            {/* Email */}
            <a
              href="mailto:basithkdrbk@gmail.com"
              className="group flex items-start gap-4 border-b border-white/10 pb-6"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-blue-400/20 bg-blue-500/10 text-xl text-blue-400 transition group-hover:border-blue-400/40 group-hover:bg-blue-500/20">
                <MdEmail />
              </div>

              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-blue-400">
                  Email
                </p>

                <p className="mt-1 break-all text-base font-semibold text-white transition group-hover:text-blue-300 sm:text-lg">
                  basithkdrbk@gmail.com
                </p>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+919048884058"
              className="group flex items-start gap-4 border-b border-white/10 py-6"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.02] text-xl text-slate-400 transition group-hover:border-blue-400/40 group-hover:bg-blue-500/10 group-hover:text-blue-400">
                <MdPhone />
              </div>

              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-blue-400">
                  Phone
                </p>

                <p className="mt-1 text-base font-semibold text-white transition group-hover:text-blue-300 sm:text-lg">
                  +91 90488 84058
                </p>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-start gap-4 border-b border-white/10 py-6">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.02] text-xl text-slate-400">
                <MdLocationOn />
              </div>

              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-blue-400">
                  Location
                </p>

                <p className="mt-1 text-base font-semibold text-white sm:text-lg">
                  Bengaluru, India
                </p>
              </div>
            </div>

            {/* Availability */}
            <div className="flex items-start gap-4 pt-6">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.02] text-xl text-slate-400">
                <MdWorkOutline />
              </div>

              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-blue-400">
                  Availability
                </p>

                <div className="mt-1 flex items-center gap-2">
                  <p className="text-base font-semibold text-white sm:text-lg">
                    Open to opportunities
                  </p>

                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                </div>

                <p className="mt-1 text-sm text-slate-500">
                  Full Stack Development · Machine Learning · Research
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-7 border-t border-white/10 pt-6">

              <p className="mb-4 font-mono text-xs uppercase tracking-wider text-slate-500">
                Connect with me
              </p>

              <div className="flex flex-wrap gap-3">

                <a
                  aria-label="GitHub"
                  href="https://github.com/basith670"
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.02] text-lg text-slate-400 transition-all duration-300 hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-blue-400"
                >
                  <FaGithub />
                </a>

                <a
                  aria-label="LinkedIn"
                  href="https://linkedin.com/in/muhammad-basith-k-13307034b"
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.02] text-lg text-slate-400 transition-all duration-300 hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-blue-400"
                >
                  <FaLinkedin />
                </a>

                <a
                  aria-label="HackerRank"
                  href="https://www.hackerrank.com/mk0227"
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.02] text-lg text-slate-400 transition-all duration-300 hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-blue-400"
                >
                  <FaHackerrank />
                </a>

                <a
                  aria-label="Email"
                  href="mailto:basithkdrbk@gmail.com"
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.02] text-lg text-slate-400 transition-all duration-300 hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-blue-400"
                >
                  <MdEmail />
                </a>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
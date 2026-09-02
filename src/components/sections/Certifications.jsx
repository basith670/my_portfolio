import certifications from "../../data/certifications";

function Certifications() {
  return (
    <section id="certifications" className="border-b border-white/10 bg-[#070a0f]">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <p className="font-mono text-xs font-bold uppercase tracking-[.25em] text-blue-400">07 / Credentials</p>
        <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-6xl">Proof of continuous learning.</h2>
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-3">{certifications.map((item) => <article key={item.id} className="bg-[#0b0f16] p-6 hover:bg-[#101620] transition-colors"><div className="flex items-start justify-between gap-4"><div><h3 className="font-bold text-white">{item.title}</h3><p className="mt-1 text-xs text-blue-400">{item.issuer}</p></div><span className="font-mono text-[10px] text-slate-600">{item.year}</span></div>{item.score && <p className="mt-4 text-xs font-semibold text-emerald-400">{item.status} · {item.score}</p>}<a href={item.file} target="_blank" rel="noreferrer" className="mt-6 inline-block text-xs font-bold text-slate-500 hover:text-white">View credential ↗</a></article>)}</div>
      </div>
    </section>
  );
}
export default Certifications;

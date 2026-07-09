function SectionTitle({
    title,
    subtitle,
    align = "center",
  }) {
    return (
      <div
        className={`mb-14 ${
          align === "center"
            ? "text-center"
            : "text-left"
        }`}
      >
        <p className="text-blue-600 font-semibold uppercase tracking-widest mb-2">
          {subtitle}
        </p>
  
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
          {title}
        </h2>
      </div>
    );
  }
  
  export default SectionTitle;
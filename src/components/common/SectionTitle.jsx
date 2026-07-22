function SectionTitle({
  title,
  subtitle,
  align = "center",
  className = "",
}) {
  const alignment = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`mb-12 lg:mb-16 ${alignment} ${className}`}>
      {subtitle && (
        <p className="mb-3 text-sm sm:text-base font-semibold uppercase tracking-[0.3em] text-blue-600">
          {subtitle}
        </p>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
        {title}
      </h2>

      <div
        className={`mt-5 h-1 w-20 rounded-full bg-blue-600 ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}

export default SectionTitle;
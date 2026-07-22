function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  target,
  disabled = false,
}) {
  const baseStyle =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 sm:px-6 sm:py-3.5 text-sm sm:text-base font-semibold transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:opacity-60 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 hover:-translate-y-1 hover:shadow-lg",

    secondary:
      "border-2 border-blue-600 text-blue-600 hover:bg-blue-50 hover:-translate-y-1",

    outline:
      "border-2 border-slate-300 text-slate-700 hover:border-blue-600 hover:text-blue-600 hover:-translate-y-1",

    ghost:
      "text-slate-700 hover:bg-slate-100",

    danger:
      "bg-red-600 text-white hover:bg-red-700 hover:-translate-y-1",
  };

  const styles = `${baseStyle} ${variants[variant]} ${className}`;

  if (href) {
    const isInternal = href.startsWith("#");

    return (
      <a
        href={href}
        className={styles}
        target={isInternal ? undefined : target || "_blank"}
        rel={isInternal ? undefined : "noopener noreferrer"}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={styles}
    >
      {children}
    </button>
  );
}

export default Button;
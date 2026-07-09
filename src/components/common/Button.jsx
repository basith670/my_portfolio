function Button({
    children,
    href,
    onClick,
    variant = "primary",
  }) {
    const baseStyle =
      "inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold transition-all duration-300";
  
    const variants = {
      primary:
        "bg-blue-600 text-white hover:bg-blue-700",
  
      secondary:
        "border border-blue-600 text-blue-600 hover:bg-blue-50",
    };
  
    if (href) {
      // Internal page links (#about, #projects, etc.)
      if (href.startsWith("#")) {
        return (
          <a
            href={href}
            className={`${baseStyle} ${variants[variant]}`}
          >
            {children}
          </a>
        );
      }
  
      // External links / PDFs
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${baseStyle} ${variants[variant]}`}
        >
          {children}
        </a>
      );
    }
  
    return (
      <button
        type="button"
        onClick={onClick}
        className={`${baseStyle} ${variants[variant]}`}
      >
        {children}
      </button>
    );
  }
  
  export default Button;
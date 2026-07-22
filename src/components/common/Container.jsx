function Container({
  children,
  className = "",
  size = "7xl",
}) {
  const sizes = {
    sm: "max-w-3xl",
    md: "max-w-5xl",
    lg: "max-w-6xl",
    xl: "max-w-7xl",
    full: "max-w-full",
  };

  return (
    <div
      className={`
        ${sizes[size] || sizes.xl}
        mx-auto
        px-4
        sm:px-6
        lg:px-8
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Container;
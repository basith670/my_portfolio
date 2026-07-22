function Card({
  children,
  className = "",
  hover = true,
  padding = "p-6",
  rounded = "rounded-2xl",
  shadow = "shadow-md",
  border = true,
  onClick,
}) {
  const hoverStyle = hover
    ? "hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
    : "";

  return (
    <div
      onClick={onClick}
      className={`
        bg-white
        ${rounded}
        ${padding}
        ${shadow}
        ${border ? "border border-slate-200" : ""}
        ${hoverStyle}
        ${onClick ? "cursor-pointer" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Card;
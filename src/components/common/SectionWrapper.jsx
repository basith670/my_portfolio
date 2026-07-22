function SectionWrapper({
  id,
  children,
  className = "",
  spacing = "default",
  background = "",
}) {
  const spacingClasses = {
    compact: "py-16 lg:py-20",
    default: "py-20 lg:py-28",
    large: "py-24 lg:py-32",
  };

  return (
    <section
      id={id}
      className={`
        ${spacingClasses[spacing] || spacingClasses.default}
        ${background}
        ${className}
      `}
    >
      {children}
    </section>
  );
}

export default SectionWrapper;
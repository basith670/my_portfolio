import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

function ScrollToTop({
  showAt = 300,
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > showAt);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showAt]);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollTop}
      aria-label="Scroll to top"
      title="Back to Top"
      className={`
        fixed
        bottom-5
        right-5
        sm:bottom-6
        sm:right-6
        lg:bottom-8
        lg:right-8
        z-50
        flex
        items-center
        justify-center
        w-12
        h-12
        sm:w-14
        sm:h-14
        rounded-full
        bg-blue-600
        text-white
        shadow-lg
        hover:bg-blue-700
        hover:scale-110
        active:scale-95
        focus:outline-none
        focus:ring-4
        focus:ring-blue-300
        transition-all
        duration-300
        ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5 pointer-events-none"
        }
      `}
    >
      <FiArrowUp className="text-xl sm:text-2xl" />
    </button>
  );
}

export default ScrollToTop;
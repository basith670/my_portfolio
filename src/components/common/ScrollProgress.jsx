import { useEffect, useState } from "react";

function ScrollProgress({
  color = "bg-blue-600",
  height = "h-1",
}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const percentage =
        docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setProgress(percentage);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);

    updateProgress();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full ${height} z-[9999] bg-transparent`}
    >
      <div
        className={`h-full ${color} rounded-r-full transition-[width] duration-150 ease-out`}
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  );
}

export default ScrollProgress;
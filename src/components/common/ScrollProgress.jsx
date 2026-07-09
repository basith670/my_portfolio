import { useEffect, useState } from "react";

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scroll = window.scrollY;

      const percentage = (scroll / totalHeight) * 100;

      setProgress(percentage);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[9999]">

      <div
        className="h-full bg-blue-600 transition-all duration-150"
        style={{
          width: `${progress}%`,
        }}
      />

    </div>
  );
}

export default ScrollProgress;
import { useEffect, useRef, useState } from "react";

function Typewriter({
  words = [],
  typingSpeed = 65,
  deletingSpeed = 40,
  delaySpeed = 1000, // Hold full word for 1 sec
  className = "",
}) {
  const [text, setText] = useState("");

  const wordIndex = useRef(0);
  const charIndex = useRef(0);

  const deleting = useRef(false);
  const paused = useRef(false);
  const holding = useRef(false);

  const lastTime = useRef(0);
  const frame = useRef();

  useEffect(() => {
    if (!words.length) return;

    const animate = (time) => {
      if (!lastTime.current) {
        lastTime.current = time;
      }

      if (paused.current) {
        frame.current = requestAnimationFrame(animate);
        return;
      }

      // Hold the completed word
      if (holding.current) {
        frame.current = requestAnimationFrame(animate);
        return;
      }

      const currentWord = words[wordIndex.current];

      const speed = deleting.current
        ? deletingSpeed
        : typingSpeed + Math.random() * 15;

      if (time - lastTime.current >= speed) {
        lastTime.current = time;

        if (!deleting.current) {
          charIndex.current++;

          setText(currentWord.slice(0, charIndex.current));

          if (charIndex.current === currentWord.length) {
            holding.current = true;

            setTimeout(() => {
              deleting.current = true;
              holding.current = false;
              lastTime.current = performance.now();
            }, delaySpeed);
          }
        } else {
          charIndex.current--;

          setText(currentWord.slice(0, charIndex.current));

          if (charIndex.current === 0) {
            deleting.current = false;
            wordIndex.current =
              (wordIndex.current + 1) % words.length;
          }
        }
      }

      frame.current = requestAnimationFrame(animate);
    };

    frame.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame.current);
  }, [words, typingSpeed, deletingSpeed, delaySpeed]);

  return (
    <h2
      className={`${className} select-none`}
      onMouseEnter={() => {
        paused.current = true;
      }}
      onMouseLeave={() => {
        paused.current = false;
      }}
    >
      {text}
      <span className="cursor">|</span>
    </h2>
  );
}

export default Typewriter;
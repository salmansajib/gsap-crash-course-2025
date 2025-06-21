import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const AnimatedLetters = ({ text }) => {
  const letterRef = useRef([]);

  useGSAP(() => {
    gsap.from(letterRef.current, {
      opacity: 0,
      y: 50,
      stagger: 0.1,
      duration: 0.5,
      ease: "circ",
    });
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-2">
      <h1 className="flex gap-0.5 text-gray-50 text-7xl font-semibold overflow-hidden">
        {text.split("").map((letter, index) => (
          <span
            key={index}
            ref={(el) => (letterRef.current[index] = el)}
            className="inline-block"
          >
            {letter}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default AnimatedLetters;

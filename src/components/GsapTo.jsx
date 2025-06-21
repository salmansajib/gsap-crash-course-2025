import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapTo = () => {
  const purpleBoxRef = useRef(null);

  useGSAP(() => {
    gsap.to(purpleBoxRef.current, {
      x: 450,
      repeat: -1,
      yoyo: true,
      rotate: 360,
      duration: 2,
      ease: "elastic",
    });
  }, []);

  return (
    <div className="bg-slate-950 min-h-screen p-[40px]">
      <h1 className="text-gray-50 text-3xl font-medium text-center">
        Gsap.To Method
      </h1>
      <div
        ref={purpleBoxRef}
        className="size-[100px] bg-purple-400 rounded-lg mt-[300px]"
      ></div>
    </div>
  );
};

export default GsapTo;

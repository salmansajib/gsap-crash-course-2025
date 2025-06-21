import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapFromTo = () => {
  const redBoxRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      redBoxRef.current,
      {
        x: 0,
        rotate: 0,
        borderRadius: "0%",
      },
      {
        x: 450,
        repeat: -1,
        yoyo: true,
        rotate: 360,
        borderRadius: "100%",
        duration: 2,
        ease: "bounce.in",
      }
    );
  }, []);

  return (
    <div className="bg-slate-950 min-h-screen p-[40px]">
      <h1 className="text-gray-50 text-3xl font-medium text-center">
        Gsap.fromTo Method
      </h1>
      <div
        ref={redBoxRef}
        className="size-[100px] bg-red-400 rounded-lg mt-[300px]"
      ></div>
    </div>
  );
};

export default GsapFromTo;

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapFrom = () => {
  const greenBoxRef = useRef(null);

  useGSAP(() => {
    gsap.from(greenBoxRef.current, {
      x: 250,
      repeat: -1,
      yoyo: true,
      rotate: 360,
      duration: 2,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div className="bg-slate-950 min-h-screen p-[40px]">
      <h1 className="text-gray-50 text-3xl font-medium text-center">
        Gsap.From Method
      </h1>
      <div
        ref={greenBoxRef}
        className="size-[100px] bg-green-400 rounded-lg mt-[300px]"
      ></div>
    </div>
  );
};

export default GsapFrom;

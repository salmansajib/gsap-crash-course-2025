import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapTimeline = () => {
  const yellowBoxRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const timeline = useRef(null); // Use useRef to persist timeline instance

  useGSAP(() => {
    timeline.current = gsap.timeline({
      repeat: -1,
      repeatDelay: 1,
      yoyo: true,
    });

    timeline.current.from(yellowBoxRef.current, {
      y: -250,
      rotate: 360,
      borderRadius: "100%",
      duration: 1,
      ease: "bounce",
    });

    timeline.current.to(yellowBoxRef.current, {
      x: 250,
      rotate: 360,
      borderRadius: "100%",
      duration: 2,
      ease: "back.inOut",
    });

    timeline.current.to(yellowBoxRef.current, {
      y: 250,
      rotate: 360,
      borderRadius: "10px",
      duration: 1,
      ease: "bounce",
    });

    timeline.current.to(yellowBoxRef.current, {
      x: 500,
      scale: 1,
      rotation: 360,
      borderRadius: "100%",
      duration: 2,
      ease: "back.inOut",
    });
  }, []);

  const playPauseAnimation = () => {
    if (!timeline.current) return;

    if (timeline.current.paused()) {
      timeline.current.play();
      setIsPlaying(true);
    } else {
      timeline.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="bg-slate-950 min-h-screen p-[40px]">
      <h1 className="text-gray-50 text-3xl font-medium text-center">
        Gsap.timeline Method
      </h1>
      <div className="mt-[300px]">
        <button
          onClick={playPauseAnimation}
          className={`${
            isPlaying ? "bg-red-400 text-gray-50" : "bg-green-400 text-gray-950"
          } w-[100px] h-[40px] flex items-center justify-center rounded-md mb-5 cursor-pointer ml-[250px]`}
        >
          {isPlaying ? <span>Pause</span> : <span>Play</span>}
        </button>
        <div
          ref={yellowBoxRef}
          className="size-[100px] bg-yellow-400 rounded-lg "
        ></div>
      </div>
    </div>
  );
};

export default GsapTimeline;

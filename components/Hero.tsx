"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [opacity, setOpacity] = useState<1 | 0>(0);

  useEffect(() => {
    setOpacity(1);
  }, []);
  return (
    <div
      className={`h-screen flex flex-col items-center justify-center bg-nightblue-50`}
    >
      <div
        className={`opacity-${opacity} transition-opacity duration-[3000ms] flex flex-col items-center justify-center`}
      >
        <p className="font-great-vibes text-8xl sm:text-[10rem] text-silver-50">
          Caro
        </p>
        <p className="text-silver-50 text-3xl">¡MIS XV!</p>
      </div>
    </div>
  );
}

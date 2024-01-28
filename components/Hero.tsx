"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoaded(true);
    }, 500);
  }, []);
  return (
    <div className={`h-screen flex flex-col items-center justify-center`}>
      <div
        className={`transition-opacity duration-1000 ${
          loaded ? "opacity-100" : "opacity-0"
        } flex flex-col items-center justify-center`}
      >
        <p className="font-great-vibes text-8xl sm:text-[10rem] text-silver-50">
          Caro
        </p>
        <p className="text-silver-50 text-3xl">¡MIS XV!</p>
      </div>
    </div>
  );
}

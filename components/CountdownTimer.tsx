"use client";
import React, { useState, useEffect } from "react";
import moment from "moment";

const CountdownTimer: React.FC = () => {
  const [timeRemaining, setTimeRemaining] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const futureDate = moment("2024-03-01");
      const now = moment();
      const duration = futureDate.diff(now);

      const days = Math.floor(duration / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((duration % (1000 * 60)) / 1000);

      setTimeRemaining({
        days,
        hours,
        minutes,
        seconds,
      });
    };

    const timer = setInterval(calculateTimeRemaining, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <p className="text-4xl text-nightblue-50">{`${timeRemaining.days} : ${timeRemaining.hours} : ${timeRemaining.minutes} : ${timeRemaining.seconds}`}</p>
    </>
  );
};

export default CountdownTimer;

"use client";

import React from "react";

// Explicit IST target (UTC+05:30)
const TARGET = new Date("2025-12-02T11:00:00+05:30");

function getTimeLeft(now = Date.now()) {
  const diff = TARGET.getTime() - now;
  const ms = Math.max(0, diff);

  const days = Math.floor(ms / 86400000);
  const hours = Math.floor((ms % 86400000) / 3600000);
  const minutes = Math.floor((ms % 3600000) / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);

  return {
    days: Math.min(days, 999), // DaisyUI animates reliably between 0–999
    hours,
    minutes,
    seconds,
    done: diff <= 0,
  };
}

export default function CountDownTimer() {
  const [time, setTime] = React.useState(() => getTimeLeft());
  const bgColor = '#92531e'

  React.useEffect(() => {
    // Update immediately, then every second
    setTime(getTimeLeft());
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
    <p className="text-white text-">Time Remaining</p>
    <div
      className="grid grid-flow-col gap-3 text-center auto-cols-max"
      aria-live="polite"
    >
      <span className="sr-only">
        {time.done
          ? "Countdown completed"
          : `Time remaining: ${time.days} days, ${time.hours} hours, ${time.minutes} minutes, ${time.seconds} seconds`}
      </span>

      <div className="flex flex-col p-2 bg-[#582800] shadow-lg font-bold rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span
            style={{
              "--value": time.days,
              "--digits": time.days >= 100 ? 3 : 2,
            }}
            aria-label={`${time.days}`}
          >
            {time.days}
          </span>
        </span>
        days
      </div>

      <div className="flex flex-col p-2 bg-[#582800] shadow-lg font-bold  rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span
            style={{
              "--value": time.hours,
              "--digits": 2,
            }}
            aria-label={`${time.hours}`}
          >
            {time.hours}
          </span>
        </span>
        hours
      </div>

      <div className="flex flex-col p-2 bg-[#582800] shadow-lg font-bold rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span
            style={{
              "--value": time.minutes,
              "--digits": 2,
            }}
            aria-label={`${time.minutes}`}
          >
            {time.minutes}
          </span>
        </span>
        min
      </div>

      <div className="flex flex-col p-2 bg-[#582800] shadow-lg font-bold rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span
            style={{
              "--value": time.seconds,
              "--digits": 2,
            }}
            aria-label={`${time.seconds}`}
          >
            {time.seconds}
          </span>
        </span>
        sec
      </div>
    </div>
    </>
  );
}

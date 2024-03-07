import { useState, useEffect } from "react";
import soundFile from "../assets/inception.mp3";

export default function ShortBreak() {
  const [minutes, setMinutes] = useState(5);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const audio = new Audio(soundFile);

  useEffect(() => {
    let intervalId;
    if (isActive) {
      intervalId = setInterval(() => {
        if (seconds === 0) {
          if (minutes !== 0) {
            setMinutes((m) => m - 1);
            setSeconds(59);
          } else {
            clearInterval(intervalId);
            audio.play();
          }
        } else {
          setSeconds((s) => s - 1);
        }
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isActive, minutes, seconds]);

  function handleClick() {
    setIsActive(!isActive);
  }
  function reset() {
    setIsActive(false);
    setMinutes(5);
    setSeconds(0);
    audio.pause();
    audio.currentTime = 0;
  }
  return (
    <>
      <div className="short-container">
        <h1>{`${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
          2,
          "0"
        )}`}</h1>
        <button onClick={handleClick}>{isActive ? "STOP" : "START"}</button>
        <button onClick={reset}>RESET</button>
      </div>
    </>
  );
}

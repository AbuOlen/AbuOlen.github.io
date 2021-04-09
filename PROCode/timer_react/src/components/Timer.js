import React, { useState, useEffect } from "react";
import StopTimer from "./StopTimer";
import ButtonPlay from "./ButtonPlay";
import "./App.css";

let distance = 0;

const Timer = () => {
  let [timerId, setTimerId] = useState(null);
  let [paused, setPaused] = useState(false);
  let [over, setOver] = React.useState(true);
  let [stopTime, setStopTime] = useState("00:00:00");
  let [endDateString, setEndDateString] = useState("00:00");

  let titleButton = [
    { name: "inactive", value: "\u23f9" },
    { name: "active", value: "\u23ef" },
    { name: "pause", value: "\u23f8" },
  ];
  let [buttonTitle, setButtonTitle] = useState(titleButton[0].value);

  const setTimer = () => {
    distance = distance - 1000;
    if (distance < 0) {
      distance = 0;
      stopTimer();
    };
    
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    let comps = [
      hours.toString().padStart(2, "0"),
      minutes.toString().padStart(2, "0"),
      seconds.toString().padStart(2, "0"),
    ];
    setStopTime(`${comps[0]}:${comps[1]}:${comps[2]}`);
  };
  const stopTimer = () => {
    clearInterval(timerId);
    setOver(true);
  };
  useEffect(() => {
    if (timerId != null && !over) {
      document.querySelector(".timer-animation").classList.remove("pause-anim");
      document.querySelector(".timer-animation").classList.add("go-anim");
    } else {
      document.querySelector(".timer-animation").classList.remove("go-anim");
      document.querySelector(".timer-animation").classList.add("pause-anim");
    }
  });

  const visualCountDown = () => {
    if (timerId === null && distance === 0) {
      let endDate = new Date();
      let now = new Date();
      let a = endDateString.split(":");
      console.log("endDateString", endDateString);
      endDate.setHours(+a[0]);
      endDate.setMinutes(+a[1]);

      if (endDate.getTime() < now.getTime()) {
        distance = endDate.getTime() - now.getTime() + 1000 * 60 * 60 * 24;
      } else {
        distance = endDate.getTime() - now.getTime();
      }
      setButtonTitle(titleButton[2].value);
      setTimerId(setInterval(() => setTimer(), 1000));
      setPaused(false);
      setOver(false);
    } else {
      if (paused) {
        setTimerId(setInterval(setTimer, 1000));
        setButtonTitle(titleButton[2].value);
      } else {
        setButtonTitle(titleButton[1].value);
        clearInterval(timerId);
        setTimerId(null);
      };
      setPaused(!paused);    
    }
  };

  return (
    <div>
      <div className="player">
        <div className="timer" id="animation">
          <p>{stopTime}</p>
          <div class="timer-animation"></div>
        </div>
        <ButtonPlay click={visualCountDown} titleButton={buttonTitle} />
      </div>
      <StopTimer click={(e) => setEndDateString(e.target.value)} />
    </div>
  );
};

export default Timer;

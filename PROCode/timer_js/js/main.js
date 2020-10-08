const btnSet = document.querySelector(".button_play");
btnSet.disabled = true;
let h = document.querySelector(".hours");
let min = document.querySelector(".minutes");
let sec = document.querySelector(".seconds");
let countDownTime = new Date();
let distance = 0;
let now = new Date();
let timerId = null;
let isPaused = false;


const setTimer = () => {
  distance -= 1000;
  if (distance < 0) {
    distance = 0;
    stopTimer();
    h.classList.add("blink");
    min.classList.add("blink");
    sec.classList.add("blink");
    document.querySelector(".timer-animation").classList.remove("go-anim");
    document.querySelector(".timer-animation").classList.add("pause-anim");
  }
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  h.innerHTML = hours.toString().padStart(2, "0");
  min.innerHTML = minutes.toString().padStart(2, "0");
  sec.innerHTML = seconds.toString().padStart(2, "0");
};

const stopTimer = () => {
  clearInterval(timerId);
};

const visualCountDown = () => {
  if (timerId === null) {
    let endDate = new Date();
    let now = new Date();
    let hm = document.getElementById("appt").value;
    let a = hm.split(":");
    endDate.setHours(+a[0]);
    endDate.setMinutes(+a[1]);

    if (endDate.getTime() < now.getTime()) {
      distance = endDate.getTime() - now.getTime() + 1000 * 60 * 60 * 24;
    } else {
      distance = endDate.getTime() - now.getTime();
    }

    timerId = setInterval(setTimer, 1000);
    btnSet.value = "\u01C1";
    document.querySelector(".timer-animation").classList.add("go-anim");

  } else {
        if(isPaused) {
            timerId = setInterval(setTimer, 1000);
            btnSet.value = "\u01C1";

            document.querySelector(".timer-animation").classList.remove("pause-anim");
            document.querySelector(".timer-animation").classList.add("go-anim");
        } else {
            clearInterval(timerId);
            btnSet.value = "\ue807";

            document.querySelector(".timer-animation").classList.remove("go-anim");
            document.querySelector(".timer-animation").classList.add("pause-anim");
        }
        isPaused = !isPaused;
  }
};

document.getElementById("appt").addEventListener("change", () => {
    btnSet.disabled = (typeof document.getElementById("appt").value === 'undefined');
})
btnSet.addEventListener("click", visualCountDown);


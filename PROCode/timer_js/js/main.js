

const btnSet = document.querySelector('.button_play');
let countDownTime = new Date();
let distance = 0;
let now = new Date();
// const cal = document.getElementById("appt");
// cal.min = now.getHours;
// cal.max = now.getHours + 1;

setTimer = () => {
    distance -= 1000;

    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector(".minutes").innerHTML = minutes;
    document.querySelector(".seconds").innerHTML = seconds;
    
};



btnSet.addEventListener('click', () => {
    let endDate = new Date();
    let now = new Date();
    let hm = document.getElementById("appt").value;
    let a = hm.split(':');
    endDate.setHours(+a[0]);
    endDate.setMinutes(+a[1]);

    distance = endDate.getTime() - now.getTime();

    setInterval(setTimer, 1000);
});







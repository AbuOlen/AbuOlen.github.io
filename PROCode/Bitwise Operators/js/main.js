
let num = 4;
let codeNumber = document.querySelector('.code');
let pin = Number(num << 4);



codeNumber.style.width = "100px";
codeNumber.style.height = "50px";
codeNumber.style.backgroundColor = "yellow";

console.log(pin);

// let pin = 64;
// let doorIsOpened = false;
// let motionDetected = false;
// let isAlarm = false;
// let codeValid = false;

// if ( !doorisOpened && !motionDetected && !isAlarm ) {
//     for (let i=1 ; i<4; i++) {  
//     let a = +prompt('Введіть пароль');
//     if (a === pin) {
//         codeValid = true;
//         break;
//     }} 
// }
// if (!codeValid) {
//     isAlarm = true; 
// }











let doorStatus = document.querySelector('.door').textContent;
let motion = document.querySelector('.move').textContent;

if ( doorStatus ==='closed' && motion === "off") {
    for (let i=1 ; i<4; i++) {  
    let a = +prompt('Введіть пароль');
    if (a === pin) {
        document.querySelector('.door').innerHTML = "open";
        document.querySelector('.door').style.color = "green";
        document.querySelector('.move').innerHTML = "on";
        document.querySelector('.move').style.color = "green";
        codeNumber.innerHTML = pin;
        break;
    }}
    if (document.querySelector('.door').textContent !== 'open')
        {
            document.querySelector('.alarm').innerHTML = "enable";
            document.querySelector('.alarm').style.color = "red";
    }
} else {
    document.querySelector('.alarm').innerHTML = "unable";
    document.querySelector('.alarm').style.color = "red";
}





// const man = {
//     species: 'human',
//     hair: 'dark',
//     race: 'europian',
//     name: 'Myron',
//     age: 25,
//     height: 180,
//     child: 1,

//     pet: {
//         name: 'Boy',
//         color: 'black',
//         age: 5,
//         graft: true,
//     },

//     car: {
//         model: 'honda',
//         color: 'white',
//         mass: '730 kg',
//         max_speed: 220,
//         price: 10000,
//     },
// }

// man.age = 26;
// man.pet.age = 6;
// man.car.climate_control = true;
// man.wife = {
//     name: 'Vanda',
// };
// delete man.car.max_speed;
// console.log(man);
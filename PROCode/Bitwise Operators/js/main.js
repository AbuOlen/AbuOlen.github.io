let num = 4;
let codeNumber = document.querySelector('.code');
let pin = Number(num << 4);

codeNumber.style.width = "100px";
codeNumber.style.height = "50px";
codeNumber.style.backgroundColor = "yellow";

console.log(pin);


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





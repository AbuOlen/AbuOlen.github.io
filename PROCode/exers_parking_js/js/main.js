const mainEl = document.querySelector('.main');
const barEl = document.querySelector('.bar');


const SPACES = 10;

const parking = [];

const generateParking = (parkingArr) => {
    for (let i = 0; i < SPACES; i++){
        let tempObj = {};
        tempObj.id = i+1;
        tempObj.occuppation = false;
        tempObj.occuTime = null;
        parkingArr.push(tempObj);
    };
    return parkingArr;
};
generateParking(parking);
parking[1].occuppation = true;
parking[2].occuppation = true;


let spacesOccu = (parkingArr) => {
    let temp = 0;
    parkingArr.forEach(item => {
        if(item.occuppation) temp++;

    });
    return temp;
};

let spacesFree = (parkingArr) => {
    let temp = 0;
    parkingArr.forEach(item => {
        if(!item.occuppation) temp++;
    });
    return temp;
};

const generateBarHTML = () => {
    let occu = spacesOccu(parking);
    let free = SPACES - occu;
    return  `zanyato  ${occu},  free ${free}`;

};

const genOneSpaceDiv = (index) => {
    let str ='';
    str = `<div class="onecar" id="${index}"><br>
        id = ${parking[index].id}<br>
        occupation: ${parking[index].occuppation}<br>
        time${parking[index].time}<br>
    </div>`;
   
    return str;
};
const generateParkingHTML = () => {
    let str = '';
    parking.forEach((value,index) => {
        str = str + genOneSpaceDiv(index);
    });
    return str;
};

const actionClick = (event) => {
    parking[ Number(event.target.id)].occuppation = !parking[ Number(event.target.id)].occuppation;
    render();   
};

const addListeners = (cars) => {
    cars.forEach((elem )=> elem.addEventListener('click', actionClick()));
       
};

const render = () => {
    mainEl.innerHTML = generateParkingHTML();
    barEl.innerHTML = generateBarHTML();
    let carsEl = document.querySelectorAll('.onecar');
    addListeners(carsEl);
};
render();



 












addListeners();






console.log(parking);
console.log(spacesOccu(parking));
console.log(spacesFree(parking));






//-----------------------Start MODEL----------------------

const SPACES = 5;

const parking = [];

const createParkingPlace = (numberPlace, statusPlace) => {
    const parkingPlace = {
        parkingPlaceID: numberPlace,
        parkingPlaceOccupied: statusPlace,
        occupiedTime: null,
    };
    return parkingPlace;
};

const createParking = () => {
    for (let i = 1; i <= SPACES; i++){
        parking.push(createParkingPlace(i, false));
    };
};
createParking();
console.log(parking);


const available = () => {
    let sum = null;
    for (let i = 0; i < parking.length; i++){
        if (!parking[i].parkingPlaceOccupied) {
            sum += 1;
        }
    };
    return sum;
};
let availableLots = available();
let occupiedLots = parking.length - availableLots;
console.log(availableLots);
console.log(occupiedLots);

let currentTime = moment().local();
console.log(currentTime.format("HH:mm:ss"));

//-----------------------End MODEL------------------

//-----------------------Start VIEW ----------------

const createLotUI = (lot) => {
    let div = document.createElement('div');
    div.className = 'lot';
    div.innerHTML = 'id = ' + lot.parkingPlaceID + ' ' + ' occupied = ' + lot.parkingPlaceOccupied + '  ' + ' occupied time = ' + lot.occupiedTime;
    return div;
}

const places = document.querySelector('.parking');
const generateUI = () => {
    for (let i = 0; i < parking.length; i++){
        places.appendChild(createLotUI(parking[i]));
    };
};
generateUI();

const localTime = document.querySelector('.info');
localTime.innerHTML = currentTime.format("HH:mm:ss");

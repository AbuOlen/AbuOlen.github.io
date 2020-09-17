const carBodyColor = {
    Yellow: 0,
    Green: 1,
    Red: 2,
    Blue: 3,
    Orange:4,
};
const transmission = {
    Automatic: 0,
    Manual: 1,
};
const interior = {
    Leather: 0,
    Fabric: 1,
    Combi: 2,
};

let  serial = 0;
class Car {
    constructor(color, trans, ac, inter) {
        this.color = color;
        this.trans = trans;
        this.ac = ac;
        this.inter = inter;
        serial++;
    }
    modelNumber() {
        let model = String(serial).padStart(4, '0');
        model += this.color;
        model += this.trans;
        model += Number(this.ac);
        model += this.inter;
        return model;
    }
};

const carOne = new Car(carBodyColor.Red, transmission.Manual, true, interior.Fabric); 
console.log(carOne);
console.log(carOne.modelNumber());

const carTwo = new Car(carBodyColor.Green, transmission.Automatic, false, interior.Leather); 
console.log(carTwo);
console.log(carTwo.modelNumber());

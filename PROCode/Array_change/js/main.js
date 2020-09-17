const arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

const arr1 =[];
const arr2 =[];
const arr3 =[];

for(let i = 0; i < 3; i++){
    arr1[i] = arr[i * 3];
    arr2[i] = arr[i * 3 +1];
    arr3[i] = arr[i * 3 +2];
};
console.log(arr);
console.log(arr1);
console.log(arr2);
console.log(arr3);

const arrNew = arr1.concat(arr2).concat(arr3);
console.log(arrNew);


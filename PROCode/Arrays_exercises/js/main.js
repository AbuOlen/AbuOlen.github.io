const arr = [5, 23, -110, 3, 18, 0, 14];
console.log(arr);


for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0) {
    console.log("Odd number " + arr[i]);
  }
}


const arr1 = arr.map((item) => item * 20);
console.log("Data * 20:  " + arr1);
console.log(arr1);


const numPosOdd = arr.filter((item) => {
  if (item > 0 && item % 2 !== 0) {
    return item;
  }
});
console.log("Array of positive & odd numbers: " + numPosOdd);
console.log(numPosOdd);


let sum = 0; 
for (let i = 0; i < arr.length; i++){
    sum += arr[i] % 3;
};
console.log('Sum of rest:' + sum);



const num5 = arr.filter((item) => {
    if (item % 5 == 0) {
      return item;
    }
  });
console.log("Array of multiples of 5: " + num5);
console.log(num5);


const arr2 = Array.from(arr);
const elem1 = arr2.shift();
console.log("Array without first element: " + arr2);
console.log(arr2);


const arr3 = Array.from(arr);
arr3.sort((a,b) => a - b);
console.log('Sort by ascending:' + arr3);
console.log(arr3);


function camelCase(str) {
    let index = str.search('-');
    let secondWord = str.slice(index+1);
    return str.slice(0,index) + secondWord.charAt(0).toUpperCase() + secondWord.slice(1);
};
const str = "border-radius";
console.log(camelCase(str));

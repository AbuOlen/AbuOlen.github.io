// ---------------------------1 zavdannay

// const show = () => {
//   console.log('hello');
// };
// const saySome = (t) => {
//   console.log('some', t);
//   return false;
// };
// // let temp = 2;
// // temp = 3;
// // saySome(temp);

// module.exports = { show, saySome };


// ----------------------------------27.10---

// const request = require('request');

// console.time();
// request('https://dou.ua', (err, resp, body) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(resp.statusCode);
//     console.log(body);
//   }
//   console.timeEnd();
// });

// ------------------------------------

// const request = require('request');
// const fs = require('fs');

// console.time();
// request('https://google.com', (err, resp, body) => {
//   if (err) {
//     console.log('err', err);
//   } else {
//     fs.writeFileSync('index.html', body, (err1) => {
//       console.log('err', err1);
//     });
//     console.log('completed');
//   }
//   console.timeEnd();
// });


// ---------------------------------------


// const fs = require('fs');

// const callback = (err) => {
//   console.log(err);
// };

// let str = 'hello';


// fs.writeFile('1.txt', str, callback);
// try open
// create
// open
// rec file
// close

// fs.readFileSync
// open
// read
// close

// ----------------------------

// const fs = require('fs');

// const str = 'hello';
// const file = '1.txt';

// console.time();
// fs.writeFile(file, str, (err) => {
//   if (err) {
//     console.log('err', err);
//   } else {
//     fs.readFile(file, 'utf8', (err1, data) => {
//       if (err1) {
//         console.log(err1);
//       } else {
//         console.log(data);
//       }
//     });
//   }
// });
// console.timeEnd();

// --------------- 2 variant

// const fs = require('fs');

// const str = 'hello';
// const file = '1.txt';

// console.time();
// fs.writeFile(file, str, (err) => {
//   if (!err) {
//     fs.readFile(file, 'utf8', (err1, data) => {
//       if (!err1) {
//         console.log(data); 
//       }
//     });
//   }
// });
// console.timeEnd();

// -----------------------

// const fs = require('fs');

// const str = 'hello';
// const str2 = '123\n';
// const file = '1.js';

// console.time();
// fs.writeFile(file, str, (err) => {
//   if (!err) {
//     fs.readFile(file, 'utf8', (err1, data) => {
//       if (!err1) {
//         console.log(data); 
//       }
//     });
//   }
// });
// console.timeEnd();

// fs.appendFile( path, data[, options], callback );
// fs.unlink(file);

// ---------------------------30.10----

// const os = require('os');
// console.log(os.cpus());
// console.log('test${os.EOL}text2');

// -----------------поймать ошибку------

// const fs = require('fs');
// const arr =[];

// const DATA = '5555';

// try {
//   if (typeof(DATA) === 'number') {
//     fs.writeFileSync('t.txt', DATA);
//   };
//   fs.readFileSync('t.txt', DATA);
//   fs.readFileSync('2.txt');
// } catch (err) {
//   console.log(err);
// }
// next  comand......
// -----------------поймать ошибку-------!!!!!!
// try {
//   if (typeof(DATA) !== 'number')  throw 'not number';
//   if (DATA % 5 !== 0) throw 'not odd 5';

//   fs.writeFileSync('t.txt', DATA);
//   fs.readFileSync('t.txt', DATA);
//   fs.readFileSync('2.txt');
// } catch (err) {
//   console.log(err);
// }
// next  comand......

// ---------------------

// const fs = require('fs');

// const EDGES = [1, 12345678];
// const NUMBER_LENGHT = 4;

// console.time();
// const arr = [];
// for (let i = EDGES[0]; i <= EDGES[1]; i++) {
//   arr.push(i.toString().padStart(NUMBER_LENGHT, '0'));
// }
// console.log(arr);
// try {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length !== NUMBER_LENGHT) throw 'wrong length';
//   }
//   fs.writeFileSync('list.txt', arr);
// } catch (err) {
//   console.log(err);
// }
// console.timeEnd();


// -----------------------------------

// const fs = require('fs');

// const SYMBOL = 'z';
// const LENGTH = 10000;

// console.time();

// let str = '';
// for (let i = 0; i < LENGTH; i++) {
//   str = `${str}${SYMBOL}`;
// }

// try {
//   fs.writeFileSync('3.txt', str);
// } catch (err) {
//   console.log(err);
// }
// console.timeEnd();

// -------------------------------------

// const fs = require('fs');

// const SYMBOL = 'z';
// const LENGTH = 10000000;

// console.time();

// try {
//   fs.writeFileSync('3.txt', SYMBOL.repeat(LENGTH));
// } catch (err) {
//   console.log(err);
// }
// console.timeEnd();

// ------------------------------------------

// const fs = require('fs');

// const SYMBOL = 'z';
// const LENGTH = 10000000;

// console.time();

// const buf = Buffer.from(SYMBOL);

// const reps = LENGTH / buf.length;

// try {
//   fs.writeFileSync('3.txt', SYMBOL.repeat(reps));
// } catch (err) {
//   console.log(err);
// }
// console.timeEnd();

// const fs = require('fs');

// const SYMBOL = 'z';
// const LENGTH = 10000000;

// console.time();

// const buf = Buffer.alloc(LENGTH, SYMBOL, 'ascii');

// try {
//   fs.writeFileSync('3.txt', buf);
// } catch (err) {
//   console.log(err);
// }
// console.timeEnd();

// ---------------------- async 

const fs = require('fs');

let str = '';
const LIM = 1234567; // 1+ mb   1 234 567
for (let i = 0; i < LIM; i++) {
  str += 'z';
}
fs.unlinkSync('4.txt');

for (let k = 0; k < 3; k++) {

    fs.appendFile('4.txt', str, (err) => {
    if (err) throw err;
  });
    console.log('file writed');

}
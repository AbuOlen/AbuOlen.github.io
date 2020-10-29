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

const fs = require('fs');

const str = 'hello';
const file = '1.txt';

console.time();
fs.writeFile(file, str, (err) => {
  if (err) {
    console.log('err', err);
  } else {
    fs.readFile(file, 'utf8', (err1, data) => {
      if (err1) {
        console.log(err1);
      } else {
        console.log(data);
      }
    });
  }
});
console.timeEnd();

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
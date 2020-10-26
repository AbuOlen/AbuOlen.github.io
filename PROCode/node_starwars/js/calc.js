const model = require('./model');
// ------1 variant-----
// function flt(char) {
//   return char.mass > 100;
// }
// function name(char) {
//   return char.name;
// }
// const result = model.filter(flt).map(name);

// ------2 variant-----
// const result = [];
// model.forEach((item) => {
//   if (item.mass > 100) {
//     result.push(item.name);
//   }
// });
// ------3 variant-----
const result = model.filter(char => char.mass > 100).map(char => char.name);

module.exports = { result };

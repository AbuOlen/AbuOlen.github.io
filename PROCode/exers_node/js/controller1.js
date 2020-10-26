const show = () => {
  console.log('hello');
};
const saySome = (t) => {
  console.log('some', t);
  return false;
};
// let temp = 2;
// temp = 3;
// saySome(temp);

module.exports = { show, saySome };
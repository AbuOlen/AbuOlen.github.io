
const request = require('request');
const process = require('process');

const arr = [];

const task2 = (obj) => {
  request(obj.url, (e, res, body) => {
    const hrstart = process.hrtime();
    if (!e && res.statusCode === 200) {
      obj.size = Buffer.byteLength(body);
      const time = process.hrtime(hrstart);
      obj.download_time = time[0] + time[1] / 1000000;
      arr.push(obj);
      if (arr.length === 30) {
        const sorted = arr.sort((first, second) => {
          return first.download_time - second.download_time;
        });
        console.table(sorted);
      }
    }
  });
};

for (let i = 0; i < 30; i++) {
  request('https://dog.ceo/api/breeds/image/random', (e, r, body) => {
    const temp = JSON.parse(body);
    const obj = {};
    obj.url = temp.message;
    const substr = temp.message.split('/');
    obj.breed = substr[substr.length - 2];
    task2(obj);
  });
}

const request = require('request');

let page = null;

const url = 'https://dou.ua/';

const parseUrl = (r, html, startIdx) => {
  const sliced = html.substring(startIdx);
  let idx1 = sliced.indexOf('https://s.dou.ua/CACHE/images/img/announces/');
  const tmp = sliced.slice(idx1, idx1 + 200);
  let idx2 = tmp.indexOf('"');
  r.push(tmp.substring(0, idx2));
  return idx1 + idx2;
} ;

request(url, (err, res, body) => {
  page = body;
  //console.log(body);
  const result = [];
  let sIdx = body.indexOf('<h3>Советуем почитать</h3>');
  for (let i = 0; i < 6; i++) {
    sIdx += parseUrl(result, body, sIdx);
  }
  console.table(result);
});


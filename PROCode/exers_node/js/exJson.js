const request = require('request');
const http = require('http');

const PORT = 3000;


http.createServer((req, res) => {
  console.log('req.url:', req.url);
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html; charset=utf8');
    res.write('<a href="/update">обновить картинку</a>');
    res.end();
  } else if (req.url === '/update') {
    request('https://dog.ceo/api/breeds/image/random', (e, r, body) => {
      const temp = JSON.parse(body);
      res.setHeader('Content-Type', 'text/html; charset=utf8');
      res.write('<a href="/update">обновить картинку</a><br>');
      res.write(`<img src=${temp.message}>`);
      res.end();
    });
  }
}).listen(PORT, () => {
  console.log('server run');
});

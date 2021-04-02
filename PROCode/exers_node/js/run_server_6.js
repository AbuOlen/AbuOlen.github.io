// const http = require('http');

// const PORT = 3000;

// http.createServer((req, res) => { // request, response
//   console.log('req.url:', req.url);
//   if (req.url === '/tt1') {
//     res.write('<b>test</b>');
//   } else {
//     res.write('<b>none</b>');
//   }
//   res.end();
// }).listen(PORT);


const http = require('http');

const PORT = 3000;

http.createServer((req, res) => {
  console.log('req.url:', req.url);
  if (req.url === '/tt1') {
    res.write('<b>test</b>');
  } else {
    res.write('<b>none</b>');
  }
  res.end();
}).listen(PORT, () => {
    console.log('server run');
});



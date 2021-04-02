// const http = require('http');

// const PORT = 3000;

// const mainReqRes = (request, response) => { // rec, res
//   console.log(request);

//   console.log(request.url);
//   console.log('********');

//   if (request.url === '/test/') response.write('<b>resp test</b>');
//   if (request.url === '/test/') response.write('<i> resp api </i>');

//   response.write(String(Date.now()));
//   response.end();
// };

// http.createServer(mainReqRes).listen(PORT);

// -------------------------------------------

const http = require('http');

const PORT = 3000;

const mainReqRes = (request, response) => { // rec, res

  console.log(request.headers);
  console.log('********');

  response.setHeader('Content-Type', 'test/html');
  response.write('<h2><div> hello</div></h2>');
  response.end();
};

http.createServer(mainReqRes).listen(PORT);

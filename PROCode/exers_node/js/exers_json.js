const request = require('request');

request('https://dog.ceo/api/breeds/list/all', (e, r, body) => {
//   console.log(body);
  const temp = JSON.parse(body);
  console.log(temp.message);
    const arr = [];
    for (let key in temp.message) {arr.push(key)};
    // ----------- або-----------
    // arr = Object.keys(temp.message);
    };
    console.log(arr);


//   console.log(terr);
//   const jsonTerr = JSON.stringify(terr);
//   console.log(jsonTerr);
});

// "\r\n"
  // ---------------------------------------------

 

 // <a href="./files/1.csv" download> download csv</a>

 // ----------------------

 const request = require('request');
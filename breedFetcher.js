const request = require("request");

const args = process.argv.slice(2);
const inputBreedName = args;
const url = `https://api.thecatapi.com/v1/breeds/search?q=${inputBreedName}`;

request(url, (err, respone, body) => {
  const data = JSON.parse(body);

  if (err) {
    console.log('error', err);
    throw err;
  }

  if (data.length === 0) {
    console.log(`Could not find a breed named ${inputBreedName}. Try again!`);
  } else if (data) {
    console.log(data[0].description);
  }

});
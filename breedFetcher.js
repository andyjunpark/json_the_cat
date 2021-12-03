const request = require("request");
const fetchBreedDescription = function(url, callback) {

request(url, (err, respone, body) => {
  const data = JSON.parse(body);

  if (err) {
    callback(new Error('Invalid URL'));
    return
  }

  if (data.length === 0) {
    callback(`Could not find the cat breed. Try again!`);
  } else if (data) {
    callback(null, data[0].description);
  }

});

};

module.exports = { fetchBreedDescription }
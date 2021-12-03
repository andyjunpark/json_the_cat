const { fetchBreedDescription } = require('./breedFetcher');

const args = process.argv.slice(2);
const inputBreedName = args;
const url = `https://api.thecatapi.com/v1/breeds/search?q=${inputBreedName}`;


fetchBreedDescription(url, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});

// api.js
import fetchJsonp from 'fetch-jsonp';

export const getPets = (cb) => {
  fetchJsonp('http://api.petfinder.com/pet.find?format=json&key=48a8c2e5fd0aa9788c9f119dacce84da&location=H4G2X1', {
  })
    .then(function(response) {
      return response.json()
    }).then(function(json) {
    cb(json.petfinder.pets.pet);
    console.log('parsed json', json);
  }).catch(function(ex) {
    console.log('parsing failed', ex)
  })
};

export const getPet = (id, cb) => {
  fetchJsonp('http://api.petfinder.com/pet.get?format=json&key=48a8c2e5fd0aa9788c9f119dacce84da&id=' + id, {
  })
    .then(function(response) {
      return response.json()
    }).then(function(json) {
    cb(json.petfinder.pet);
    console.log('parsed json', json);
  }).catch(function(ex) {
    console.log('parsing failed', ex)
  })
};

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  console.log(error); // eslint-disable-line no-console
  throw error;
}

function parseJSON(response) {
  return response.json();
}



// WEBPACK FOOTER //
// ./src/api.js
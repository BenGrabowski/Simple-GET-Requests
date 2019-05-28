'use strict';

function getDogImages(apiUrl){
  fetch(apiUrl)
  .then(response => response.json())
  .then(responseJson => console.log(responseJson.message));
  }

function generateUrl(numOfDogs){
  let apiUrl = `https://dog.ceo/api/breeds/image/random/${numOfDogs}`;
  console.log(apiUrl);
  getDogImages(apiUrl);
}

function handleSubmit(){
  $('form').submit(event => {
    event.preventDefault();
    $('.dog-images').empty();
    let numOfDogs = $('input[type=number]').val();
    generateUrl(numOfDogs);
  });
}

$(handleSubmit());
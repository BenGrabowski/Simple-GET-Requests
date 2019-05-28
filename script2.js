'use strict';

function getDogImages(apiUrl){
  fetch(apiUrl)
  .then(response => response.json())
  .then(responseJson => displayImages(responseJson));
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

function displayImages(responseJson){
  console.log('displayImages ran');
  console.log(responseJson.message);
  let links = responseJson.message;

  for(let i = 0; i < links.length; i++){
    let imgEl = `<img src="${links[i]}" alt="dog">`;
    console.log(imgEl);
    $('.dog-images').append(imgEl);
  }
}

$(handleSubmit());
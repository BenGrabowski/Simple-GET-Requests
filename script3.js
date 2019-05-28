'use strict';

function getDogImages(apiUrl){
  fetch(apiUrl)
  .then(response => response.json())
  .then(responseJson => displayResults(responseJson))
  .catch(error => alert('Something went wrong!'));
  }

function generateUrl(breed){
  let apiUrl = `https://dog.ceo/api/breed/${breed}/images/random`;
  console.log(apiUrl);
  getDogImages(apiUrl);
}

function handleSubmit(){
  $('form').submit(event => {
    event.preventDefault();
    let breed = $('input[type=text]').val();
    generateUrl(breed);
  });
}

function displayResults(responseJson){
  let link = responseJson.message;
  console.log(link);
  if(link === 'Breed not found') {
    displayError();
  } else {
    let imgEl = `<img src="${link}" alt="dog">`;
    $('.dog-image').html(imgEl);
  } 
}

function displayError(){
  let errorMessage = `<h2>Sorry, breed not found</h2>`;
  $('.dog-image').html(errorMessage);
  console.log('displayError ran');
}

$(handleSubmit());
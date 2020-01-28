const memeText = document.getElementById('meme-text');
const memeTextResponse = document.getElementById('meme-text-response');
const memeContainer = document.getElementById('meme-container');
let counter = 0;

//addEventListeners placed on buttons
window.addEventListener("click", function(event) {
  if (event.target.matches("#generate-button")) {
    RemoveSize();
    ChangeSize();
  }
  //Generate New Joke/Text
  if (event.target.matches("#generate-new-text")) {
    RequestJokeApi();
  }
  //Generate New Quote/Text
  if (event.target.matches("#generate-new-quote")) {
    RequestPQApi();
  }
  //Generate New Image
  if (event.target.matches("#generate-new-image")) {
    RequestNewImage();
  }
});

/**
 * Remove size of font on meme.
 */
function RemoveSize() {
  if (memeText.classList.contains('font-size-sm')) {
    memeText.classList.remove('font-size-sm');
  }
  if (memeText.classList.contains('font-size-md')) {
    memeText.classList.remove('font-size-md');
  }
  if (memeText.classList.contains('font-size-lg')) {
    memeText.classList.remove('font-size-lg');
  }
}

/**
 * Change meme font size based on dropdown item chosen.
 */
function ChangeSize() {
  let dropdownSize = document.getElementById('dropdown-size');
  let sizeSelected = dropdownSize.options[dropdownSize.selectedIndex].value;
  // Check the selected size and add the class associated with that size.
  if (sizeSelected === "Small") {
    memeText.classList.add('font-size-sm');
  }
  if (sizeSelected === "Medium") {
    memeText.classList.add('font-size-md');
  }
  if (sizeSelected === "Large") {
    memeText.classList.add('font-size-lg');
  }
}

/*
 *Generate new background image.
 *NOTE: There is a bug on unsplash, to generate new image, the pixel size must change by 1. If image is same res., is doesnt change.
 */
function RequestNewImage() {
  counter++;
  document.getElementById('meme-container').style.backgroundImage = "url('https://source.unsplash.com/1080x108'" + counter + "'/?programming,coding,desk,code')";
}

/**
*Call Jokes Api
*/
function RequestJokeApi() {
  var request = new XMLHttpRequest();
  let requestURL = "https://sv443.net/jokeapi/category/programming";
  //I am going to GET, THIS URL
  request.open('GET', requestURL);
  request.responseType = 'text';
  request.send();

  //Request fulfilled, whats happens on page load and when it returns?
  request.onload = function() {
    var dataResponse = request.response;
    var dataParsed = JSON.parse(dataResponse);
    //Grab values
    var category = dataParsed.category;
    var type = dataParsed.type;
    //Single sentence joke.
    if (type === "single") {
      let joke = dataParsed.joke;
      memeText.innerHTML = joke;
      memeTextResponse.innerHTML = " ";
    }
    //twopart means the joke has a question, and an answer.
    if (type === "twopart") {
      let joke = dataParsed.joke;
      var setup = dataParsed.setup;
      var delivery = dataParsed.delivery;
      memeText.innerHTML = setup;
      memeTextResponse.innerHTML = delivery;
    }
  }
}

/**
*Call Quotes Api
*/
function RequestPQApi() {
  let request = new XMLHttpRequest();
  let requestURL = "https://programming-quotes-api.herokuapp.com/quotes/random";
  request.open('GET', requestURL);
  request.responseType = 'text';
  request.send();

  request.onload = function() {
    let quoteResponse = request.response;
    let quoteParsed = JSON.parse(quoteResponse);
    //Grab values
    let quote = quoteParsed.en;
    let author = quoteParsed.author;
    //Create text on page
    memeText.innerHTML = quote;
    memeTextResponse.innerHTML = author;
  }
}

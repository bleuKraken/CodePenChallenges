const generateButton = document.getElementById('generate-quote');

// Event listener
generateButton.addEventListener("click", function(){
  newQuote();
});

//quotes
let quotes = [
  "Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.",
  "Anyone who has never made a mistake has never tried anything new.",
  "The world is a dangerous place to live; not because of the people who are evil, but because of the people who don't do anything about it.",
  "We cannot solve our problems with the same thinking we used when we created them.",
  "If you can't explain it simply, you don't understand it well enough",
  "The only source of knowledge is experience.",
  "Education is what remains after one has forgotten what one has learned in school.",
  "Only one who devotes himself to a cause with his whole strength and soul can be a true master. For this reason mastery demands all of a person.",
  "Logic will get you from A to B. Imagination will take you everywhere."
]

function newQuote() {
  let randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById("quote").innerHTML = quotes[randomNumber];
}

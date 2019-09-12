/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/
var quotes = [ {
        quote: "The unexamined life is not worth living",
        source: "socrates",
        citation: "Google",
        year: 1689},
              {
        quote: "Whereof one cannot speak, thereof one must be silent",
        source: "Ludwig Wittgenstein",
        citation: "Google",
        year: 1770},
              {
        quote: "The life of man (in a state of nature) is solitary, poor, nasty, brutish, and short",
        source: "Thomas Hobbes",
        citation: "Google",
        year: 1570},
              {
        quote: "He who thinks great thoughts, often makes great errors",
        source: "Martin Heidegger",
        citation: "Google",
        year: 1470},
              {
        quote: "We live in the best of all possible worlds",
        source: "Gottfried Wilhelm Leibniz",
        citation: "Google",
        year: 1470}];
        


/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/
var randomNumber;
function getRandomQuote(quotes) {
randomNumber = Math.floor(Math.random() * quotes.length);
    
    return quotes[randomNumber];
}
console.log(getRandomQuote(quotes));

/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/

var message = '';
function printQuote() {
  var textQuote = getRandomQuote(quotes);
    message += '<p class="quote">' + textQuote.quote;
    message += '<p class="source">' + textQuote.source;
    if(textQuote.citation) {
    message += '<span class="citation">'+ textQuote.citation + '</span>';
    }
    if(textQuote.year) {
        message += '<span class="year">'+ textQuote.year + '</span>';
    }
    
    message += '</p>';
    
    return message;
}
 
console.log(printQuote());
document.getElementById('quote-box').innerHTML = message;
/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

//document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
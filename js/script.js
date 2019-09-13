


/*** 
Create an Array named quotes to hold the 5 quote objects with different properties like quote, source, citation, year and tags
***/
var quotes = [ {
        quote: "The unexamined life is not worth living",
        source: "socrates",
        citation: "Google",
        year: 1689,
        tags: "humour"},
        {
        quote: "Whereof one cannot speak, thereof one must be silent",
        source: "Ludwig Wittgenstein",
        citation: "Google",
        year: 1770,
        tags: "humour"},
        {
        quote: "The life of man (in a state of nature) is solitary, poor, nasty, brutish, and short",
        source: "Thomas Hobbes",
        citation: "Google",
        year: 1570,
        tags: ""},
        {
        quote: "He who thinks great thoughts, often makes great errors",
        source: "Martin Heidegger",
        citation: "Google",
        year: 1470,
        tags: ""  },
        {
        quote: "We live in the best of all possible worlds",
        source: "Gottfried Wilhelm Leibniz",
        citation: "Google",
        year: 1470,
        tags: ""   }];
        


/***
     Create a randomQuote function to return a ranodm quote whenver the function is called.The returned value is stored in a variable randomNumber.
***/
var randomNumber;
function getRandomQuote(quotes) {
randomNumber = Math.floor(Math.random() * quotes.length);
    
    return quotes[randomNumber];
}
console.log(getRandomQuote(quotes));

/***
Call the randomQuote function and assign it to a variable.
Create a printQuote Function to build the html quote string.
Add conditional statements to check for year and citation property and add them to the string.Set the innerHTML of the div to the string and return the new random string every time the function is called. 
***/

var message = "";

function printQuote() {
    
    var textQuote = getRandomQuote(quotes);
    
    message = '<p class="quote">' + textQuote.quote;
    
    message += '<p class="source">' + textQuote.source;
    
    if(textQuote.citation) {
        
    message += '<span class="citation">'+ textQuote.citation + '</span>';
    }
    
    if(textQuote.year) {
        
        message += '<span class="year">'+ textQuote.year + '</span>';
    }
    
    message += '</p>';
    
    document.getElementById('quote-box').innerHTML = message;
    
    return message;
}
 




/***
  
  When the button is clicked the print quote function is triggered and generates a random quote.
***/

document.getElementById('loadQuote').addEventListener('click', printQuote, false);




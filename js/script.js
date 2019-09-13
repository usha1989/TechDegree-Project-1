


/*** 
Create an Array named quotes to hold the 5 quote objects with different properties like quote, source, citation, year and tags
***/
var quotes = [ {
        quote: "The unexamined life is not worth living",
        source: "socrates",
        citation: "Google",
        year: 1689,
        tags: "life"},
        {
        quote: "Whereof one cannot speak, thereof one must be silent",
        source: "Ludwig Wittgenstein",
        citation: "Google",
        year: 1770,
        tags: "life"},
        {
        quote: "The life of man (in a state of nature) is solitary, poor, nasty, brutish, and short",
        source: "Thomas Hobbes",
        citation: "Google",
        year: 1570,
        tags: "philosophy"},
        {
        quote: "He who thinks great thoughts, often makes great errors",
        source: "Martin Heidegger",
        citation: "Google",
        year: 1470,
        tags: "philosophy"  },
        {
        quote: " Let us accept our own responsibility for the future.",
        source: "John F. Kennedy",
        citation: "brainyQuote",
        year: 1470,
        tags: "politics"   }];
        


/***
     Create a randomQuote function to return a ranodm quote whenver the function is called.The returned value is stored in a variable randomNumber.
***/
var randomNumber;
function getRandomQuote(quotes) {
randomNumber = Math.floor(Math.random() * quotes.length);
    
    return quotes[randomNumber];
}


/***
Call the randomQuote function and assign it to a variable.
Create a printQuote Function to build the HTML quote string.
Add conditional statements to check for year and citation property and add them to the string.Set the innerHTML of the div to the string and return the new random string every time the function is called. 

Extra credit:create conditional to check for tags and add them to the HTML string
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
    if(textQuote.tags == "humour"||textQuote.tags == "life"|| textQuote.tags == "philosophy"||textQuote.tags == "politics") {
       message += '<span class="tags">'+ " "+ textQuote.tags + '</span>';
       }
    
    message += '</p>';
    
    document.getElementById('quote-box').innerHTML = message;
    
    return message;
}
 
//Extra credit : Function which creates a random color code and assigns the color to the background css property.
function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    document.body.style.background = bgColor;
    document.getElementById('loadQuote').onclick = bgColor;
   
    }

//Set time interval for two functions every 2 secs and that randomly chnages both the quote and the background color.
setInterval(printQuote,2000);
setInterval(random_bg_color,2000);


/***
  
  When the button is clicked the print quote function is triggered and generates a random quote.
  When the button is clicked the random color function is triggered and generates a random quote.
***/

document.getElementById('loadQuote').addEventListener('click', printQuote, false);
document.getElementById('loadQuote').addEventListener('click', random_bg_color, false);





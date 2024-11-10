let usedIndices = new Set();

function randomQuote() {
    var quoteAuthor = [
        "-- Oscar Wilde", "-- Marilyn Monroe", "-- Frank Zappa", "-- Albert Einstein", 
        "-- Marcus Tullius Cicero", "-- Bernard M. Baruch", "-- William W. Purkey", 
        "-- Dr. Seuss", "-- Mae West", "-- Mahatma Gandhi", "-- Robert Frost", 
        "-- J.K. Rowling", "-- Albert Camus", "-- Mark Twain", "-- Maya Angelou", 
        "-- Elbert Hubbard", "-- Oscar Wilde", "-- Mahatma Gandhi"
    ];

    var quotesText = [
        '“Be yourself; everyone else is already taken.”', 
        "“Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.”",
        "“So many books, so little time.”", 
        "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”", 
        "“A room without books is like a body without a soul.”", 
        "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”", 
        "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”", 
        "“You only live once, but if you do it right, once is enough.”", 
        "“Be the change that you wish to see in the world.”", 
        "“In three words I can sum up everything I've learned about life: it goes on.”", 
        "“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”", 
        "“If you tell the truth, you don't have to remember anything.”", 
        "“A friend is someone who knows all about you and still loves you.”", 
        "“To live is the rarest thing in the world. Most people exist, that is all.”", 
        "“Always forgive your enemies; nothing annoys them so much.”", 
        "“Live as if you were to die tomorrow. Learn as if you were to live forever.”", 
        "“We accept the love we think we deserve.”", 
        "“Without music, life would be a mistake.”"
    ];

  
  if (usedIndices.size === quotesText.length) {
    usedIndices.clear(); 
}

let randomIndex;
do {
    randomIndex = Math.floor(Math.random() * quotesText.length);
} while (usedIndices.has(randomIndex));

usedIndices.add(randomIndex);
document.getElementById("quoteText").innerHTML = quotesText[randomIndex];
document.getElementById("quoteAuthor").innerHTML = quoteAuthor[randomIndex];
}

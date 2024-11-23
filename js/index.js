let Quotes =[
    {
        author: "-- Mark Twain",
        quote:"“Good friends, good books, and a sleepy conscience: this is the ideal life.”",
    },
    {
        author: "-- Mother Teresa",
        quote:"“Not all of us can do great things. But we can do small things with great love.”",
    },
    {
        author:"-- Oscar Wilde",
        quote:"“Be yourself; everyone else is already taken.”",
    },
    {
        author: "-- Mahatma Gandhi",
        quote:"“Without music, life would be a mistake.”",
    },
    {
        author:"-- Marcus Tullius Cicero",
        quote:"“A room without books is like a body without a soul.”",
    },
    {
        author:"-- Frank Zappa",
        quote:"“So many books, so little time.”",
    },
    {
        author: "-- Elbert Hubbard",
        quote:"“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
    },
    {
        author: "--  Mark Twain",
        quote:"“If you tell the truth, you don't have to remember anything.”",
    },
];
let newIndex;
let lastIndex;
let displayedQuotes = [];

function randomQuote() {
if(displayedQuotes.length === Quotes.length){
    displayedQuotes = [];
}

do {
    newIndex = Math.floor(Math.random() * Quotes.length);
} while (newIndex == lastIndex || displayedQuotes.includes(newIndex));

lastIndex = newIndex;
displayedQuotes.push(newIndex);

document.getElementById("quoteText").innerHTML = Quotes[newIndex].quote;
document.getElementById("quoteAuthor").innerHTML = Quotes[newIndex].author;
}

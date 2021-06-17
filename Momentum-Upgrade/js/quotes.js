const quotes = [
    {
        quote: "The way to",
        author: "Walt Disney"
    },
    {
        quote: "Two",
        author: "Walt Dus"
    },
    {
        quote: "Three",
        author: "Walt Dus"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
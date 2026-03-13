const quotes = [
    {
        text: "The Constitution is the supreme law of our land. It is not simply a formal document regulating public power, but it is the mirror reflecting the nation's soul.",
        author: "Justice Pius Langa"
    },
    {
        text: "The law is not an end in itself; it is a means to an end. The end is justice.",
        author: "Justice Yvonne Mokgoro"
    },
    {
        text: "The right to dignity is the cornerstone of our Constitution. Without it, the other rights have little meaning.",
        author: "Justice Arthur Chaskalson"
    },
    {
        text: "Law must be a tool for justice. If it is not, it is a mere instrument of power.",
        author: "Justice Dikgang Moseneke"
    },
    {
        text: "The law is a profession of words, but its ultimate value lies in its deeds.",
        author: "Justice Edwin Cameron"
    },
    {
        text: "The Constitution is a promise that we make to each other... to build a society in which all can live in dignity.",
        author: "Justice Kate O'Regan"
    },
    {
        text: "I never lost hope that we would one day live in a country where the law is used to protect the people, not to oppress them.",
        author: "Advocate George Bizos"
    },
    {
        text: "Transformation is a process. It is a dream of a South Africa that is significantly different from the South Africa of the past.",
        author: "Justice Dikgang Moseneke"
    },
    {
        text: "The beauty of our Constitution is that it was not written in ink, but in the blood, sweat, and tears of those who fought for a just society.",
        author: "Justice Albie Sachs"
    }
];

let index = 0;

function updateQuote() {
    const textEl = document.getElementById('quote-text');
    const authorEl = document.getElementById('quote-author');

    if (textEl && authorEl) {
        // Fade out
        textEl.style.opacity = 0;
        authorEl.style.opacity = 0;

        setTimeout(() => {
            index = (index + 1) % quotes.length;
            textEl.textContent = `"${quotes[index].text}"`;
            authorEl.textContent = `— ${quotes[index].author}`;
            
            // Fade in
            textEl.style.opacity = 1;
            authorEl.style.opacity = 1;
        }, 800);
    }
}

// Rotate every 8 seconds
setInterval(updateQuote, 8000);
const express = require('express');
const cors = require('cors')
const app = express();
const port = 8080;

app.use(cors());

const jokes = [
    "Why don't skeletons fight each other? They don't have the guts.",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "Why don't eggs tell jokes? They might crack up.",
    "I'm reading a book about anti-gravity. It's impossible to put down.",
    "I used to play piano by ear, but now I use my hands."
];

app.get('/joke', (req, res) => {
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    res.json({joke:randomJoke})
});

app.listen(port, () => {
    console.log(`Serveri eshte duke u bere run: http://localhost:${8080}`)
})
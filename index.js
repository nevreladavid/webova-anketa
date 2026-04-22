const express = require('express');
const bodyParser = require('body-parser');
const storage = require('./storage/jsonStorage');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/send', (req, res) => {
    const { username, message } = req.body;
    if (!username || !message) {
        return res.status(400).send('Jméno a zpráva jsou povinné!');
    }

    const userIP = req.headers['x-forwarded-for'] || req.ip;

    storage.addMessage(username, message, userIP);
    res.redirect('/');
});

app.get('/messages', (req, res) => {
    let messages = storage.getMessages();

    const search = req.query.search.toLowerCase() || "";

    const filteredMessages = messages.filter(msg =>
        msg.message.toLowerCase().includes(search) || 
        msg.username.toLowerCase().includes(search)
    );

    res.json(filteredMessages);
});

app.listen(PORT, () => {
    console.log(`Server běží na http://localhost:${PORT}`);
});
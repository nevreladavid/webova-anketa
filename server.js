const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const responsesFile = path.join(__dirname, 'responses.json');

// Funkce pro načtení odpovědí
function getResponses() {
    if (!fs.existsSync(responsesFile)) return [];
    try {
        const data = fs.readFileSync(responsesFile, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error("Chyba při čtení responses.json:", error);
        return [];
    }
}

// Funkce pro uložení odpovědí
function saveResponses(responses) {
    try {
        fs.writeFileSync(responsesFile, JSON.stringify(responses, null, 2), 'utf8');
    } catch (error) {
        console.error("Chyba při zápisu do responses.json:", error);
    }
}

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/submit', (req, res) => {
    const { name, age, language, experience, comment } = req.body;
    const newResponse = {
        name,
        age: parseInt(age),
        language,
        experience,
        comment: comment || '',
        timestamp: new Date().toLocaleString()
    };
    const responses = getResponses();
    responses.push(newResponse);
    saveResponses(responses);
    res.redirect('/results');
});

app.get('/results', (req, res) => {
    const responses = getResponses();
    responses.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    res.render('results', { responses });
});

app.listen(PORT, () => {
    console.log(`Server běží na http://localhost:${PORT}`);
});
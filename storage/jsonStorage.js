const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'messages.json');

function getMessages() {
    if (!fs.existsSync(filePath)) return [];
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        return data ? JSON.parse(data) : [];
    } catch (error) {
        console.error("❌ Chyba při čtení messages.json:", error);
        return [];
    }
}

function addMessage(username, message, ip) {
    const messages = getMessages();
    const newMessage = {
        username,
        message,
        timestamp: new Date().toISOString(),
        ip
    };
    messages.push(newMessage);
    try {
        fs.writeFileSync(filePath, JSON.stringify(messages, null, 2), 'utf8');
    } catch (error) {
        console.error("❌ Chyba při zápisu do messages.json:", error);
    }
}

module.exports = { getMessages, addMessage };
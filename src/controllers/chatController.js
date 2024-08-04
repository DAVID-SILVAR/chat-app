const { broadcastMessage } = require('../websocket/websocketUtils');

function processMessage(ws, message) {
    console.log(`Processing message: ${message}`);
    broadcastMessage(ws.server, message);
}

module.exports = { processMessage };
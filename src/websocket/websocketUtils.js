const WebSocket = require('ws');

function handleConnection(ws) {
  console.log('Client connected');

  ws.on('message', (message) => {
    console.log(`Received message: ${message}`);
    
    // Broadcast the message to all clients
    broadcastMessage(ws.server, message);
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
}

function broadcastMessage(wss, message) {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(message);
    }
  });
}

module.exports = { handleConnection, broadcastMessage };

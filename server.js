const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const rooms = {};

wss.on('connection', (ws) => {
  console.log('Client connected');

  ws.on('message', (message) => {
    const data = JSON.parse(message);
    
    switch(data.type) {
      case 'join':
        if (!rooms[data.room]) {
          rooms[data.room] = new Set();
        }
        rooms[data.room].add(ws);
        ws.room = data.room;
        console.log(`Client joined room: ${data.room}`);
        break;

      case 'message':
        if (ws.room) {
          rooms[ws.room].forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
              client.send(JSON.stringify({ type: 'message', text: data.text }));
            }
          });
        }
        break;
    }
  });

  ws.on('close', () => {
    if (ws.room) {
      rooms[ws.room].delete(ws);
      console.log(`Client left room: ${ws.room}`);
    }
    console.log('Client disconnected');
  });
});

app.get('/', (req, res) => {
  res.send('WebSocket Chat Server is running');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

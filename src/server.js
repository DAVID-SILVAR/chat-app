const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const chatRoutes = require('./routes/chatRoutes');
const { setupWebSocketServer } = require('./websocket/websocketServer');

const app = express();
const server = http.createServer(app);
const wss = setupWebSocketServer(server);

app.use('/', chatRoutes);

app.use(express.static('public'));

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

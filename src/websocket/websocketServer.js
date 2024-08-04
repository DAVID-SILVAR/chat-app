const WebSocket = require('ws');
const { handleConnection } = require('./websocketUtils');

function setupWebSocketServer(server) {
  const wss = new WebSocket.Server({ server });

  wss.on('connection', handleConnection);

  return wss;
}

module.exports = { setupWebSocketServer };

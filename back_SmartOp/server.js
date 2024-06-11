const http = require('http');
const app = require('./app');
require('dotenv').config();

const port = process.env.PORT || 3000

app.set('port', port);

const errorHandler = error => {
    if (error.syscall !== 'listen') {
      throw error;
    }
}

const server = http.createServer(app);

server.on('listening', () => {
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
  console.log('Server listening on ' + bind);
});

server.listen(process.env.PORT || 3000);
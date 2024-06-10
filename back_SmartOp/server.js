const http = require('http');
const app = require('./app');

app.set('port', process.env.PORT || 3000);

const errorHandler = error => {
    if (error.syscall !== 'listen') {
      throw error;
    }
}

const server = http.createServer((req, res) => {
    res.end('Voilà la réponse du serveur !');
});

server.listen(process.env.PORT || 3000);

console.log("server listening on port ", app.PORT);
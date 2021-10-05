const http = require('http');
require('dotenv').config();

const app = require('./app');

const server = http.createServer(app);

const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

server.listen(PORT, HOST, function() {
    console.log(`Listening on port : ${PORT}`)
})
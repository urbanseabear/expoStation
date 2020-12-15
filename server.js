const express = require('express');
const path = require('path');
const parser = require('body-parser');
const { ServerResponse } = require('http');

const server = express();
const port = 3005;

server.use(parser.json());
server.use(parser.urlencoded({ extended: true }));
server.use(express.static('./dist'));

server.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

server.listen(port, () => console.log(`meowing on port ${port}!`));
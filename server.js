"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// server.ts
var http_1 = require("http");
var server = http_1.default.createServer(function (_req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!');
});
server.listen(3000, function () {
    console.log('Server running on http://localhost:3000/');
});

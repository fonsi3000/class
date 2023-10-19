const express = require('express');
const app = express();
const path = require('path');

// Establece la carpeta de vistas y el motor de vistas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

module.exports = app;

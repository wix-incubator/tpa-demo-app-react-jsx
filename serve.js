'use strict';
var PORT = 5000;
var express = require('express');
var app = express();

app.use('/', express.static(__dirname));
app.listen(PORT, function() {
    console.log('serving sample app on http://localhost:' + PORT);
});

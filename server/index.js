const express = require('express');
const router = require('./routes');

const app = express();

app.use(express.static('dist'));
app.use(router);

app.listen(8080);

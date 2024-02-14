const express = require('express');
const path = require('path');

const app = express();

const indexRoutes = require('./routes/index');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(indexRoutes);

app.listen(3000);

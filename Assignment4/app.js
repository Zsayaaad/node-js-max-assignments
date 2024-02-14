const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const userData = require('./routes/add-user');
const users = require('./routes/users');

app.use(express.urlencoded({ extended: true }));

app.use(userData.routes);
app.use(users);

app.listen(3000);

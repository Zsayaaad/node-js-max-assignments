const express = require('express');

const app = express();

// Middlewares
// app.use('/', (req, res, next) => {
//   console.log('This always runs..');
//   next();
// });

// app.use('/', (req, res, next) => {
//   res.send('<h1>Hello from the second Middleware🍕</h1>');
// });

app.use('/users', (req, res) => {
  console.log('/users midlleware');
  res.send('<h1>This is /users Middleware🍕</h1>');
});

app.use('/', (req, res) => {
  console.log('/ midlleware');
  res.send('<h1>This is / Middleware🍕</h1>');
});

app.listen(3000);

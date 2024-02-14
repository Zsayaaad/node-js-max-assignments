const express = require('express');

const router = express.Router();

const userData = require('./add-user');

router.get('/users', (req, res, next) => {
  const users = userData.users;
  res.render('users', { pageTitle: 'Users', users: users });
});

module.exports = router;

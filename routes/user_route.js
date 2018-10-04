const express = require('express');

const router = express.Router();
const bcrypt = require('bcrypt');
const knex = require('../db/knex');


// GENERAL/BASE LEVEL
router.get('/user', (req, res) => {
  res.render('users/user');
});

router.get('/heh', (req, res) => {
  // knex('questions')
  res.render('heh');
});

router.get('/profile', (req, res) => {
  res.render('users/profile');
});

// router.post('/', (req, res, next) => {
//   bcrypt.hash(req.body.password, 12)
//     .then(password_digest => knex('users')
//       .insert({
//         username: req.body.email,
//         password_digest,
//       }, '*'))
//     .then((users) => {
//       const user = users[0];
//       delete user.password_digest;
//       res.send(user);
//     })
//     .catch((err) => {
//       next(err);
//     });
// });

// ADD NEW USER:
router.post('/new_user', (req, res) => knex('users')
  .insert({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  }, '*')
  .then((users) => {
    res.render('users/profile', { users });
  }));


module.exports = router;

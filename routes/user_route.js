const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const knex = require('../db/knex');


// GENERAL/BASE LEVEL
router.get('/profile', (req, res) => {
    // knex('questions')
        res.render('user')
});


router.post('/', (req, res, next) => {
    bcrypt.hash(req.body.password, 12)
      .then((password_digest) => {
        return knex('users')
          .insert({
            username: req.body.email,
            password_digest: password_digest
          }, '*');
      })
      .then((users) => {
        const user = users[0];
        delete user.password_digest;
        res.send(user);
      })
      .catch((err) => {
        next(err);
      });
  });
  
  module.exports = router;
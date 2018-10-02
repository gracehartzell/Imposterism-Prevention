const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const knex = require('../db/knex');

// GENERAL/BASE LEVEL
router.get('/quizzes', (req, res) => {
    // knex('questions')
        res.render('quizzes')
});

module.exports = router;
  
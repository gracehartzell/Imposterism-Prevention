const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const knex = require('../db/knex');
const quizzes = require('../data/questions.json');

// GENERAL/BASE LEVEL
router.get('/quizzes', (req, res) => {
    // knex('questions')
        res.render('quizzes', {
            quizzes: quizzes
        });
});

router.get('/quizzes/quiz/:id', (req, res) => {
    const quizById = quizzes.findIndex((quiz) => quiz.id === req.params.id);
    console.log('id', req.params.id)
    console.warn('Here is the id', quizById);

    res.render('quizzes', {
        quizzes: quizzes
    });
});

module.exports = router;
  
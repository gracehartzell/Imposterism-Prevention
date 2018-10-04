const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

// GENERAL/BASE LEVEL
router.get('/quizzes', (req, res) => {
    // Knex returns a promise.
    knex.select().table('quizzes')
    .then((data) => { // When promise resolves, it will resolve with result of query.
      res.render('quizzes/quizzes', {
        quizzes: data
      });
    }).catch((error) => {
      console.warn('Error city');
    })
});

router.get('/quiz/:id', (req, res) => {
    const quizId = req.params.id;
    knex('quizzes').where('id', quizId)
    .then((data) => {
      res.render('quizzes/quiz', {
        quiz: data[0]
      });
    }).catch()
});


module.exports = router;
  
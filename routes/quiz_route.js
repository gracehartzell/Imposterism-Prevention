const express = require('express');

const router = express.Router();
const knex = require('../db/knex');

// GENERAL/BASE LEVEL
router.get('/quizzes', (req, res, next) => {
  // Knex returns a promise.
  knex.select().table('quizzes')
    .then((data) => { // When promise resolves, it will resolve with result of query.
      res.render('quizzes/quizzes', {
        quizzes: data,
      });
    })
});

router.get('/quiz/:id', (req, res, next) => {
  const quizId = req.params.id;
  knex('quizzes').where('id', quizId)
    .then((data) => {
      res.render('quizzes/quiz', {
        quiz: data[0],
      });
    }).catch((error) => {
      next(error);
    });
});


router.get('/difficulty', (req, res) => {
  knex('quizzes')
    .orderBy('difficulty', 'desc')
    .then((quizzes) => {
      res.render('quizzes/quizzes', { quizzes });
    });
});

router.get('/difficultyasc', (req, res) => {
  knex('quizzes')
    .orderBy('difficulty', 'asc')
    .then((quizzes) => {
      res.render('quizzes/quizzes', { quizzes });
    });
});

router.get('/length', (req, res) => {
  knex('quizzes')
    .orderBy('question_count', 'desc')
    .then((quizzes) => {
      res.render('quizzes/quizzes', { quizzes });
    });
});

router.get('/lengthasc', (req, res) => {
  knex('quizzes')
    .orderBy('question_count', 'asc')
    .then((quizzes) => {
      res.render('quizzes/quizzes', { quizzes });
    });
});



module.exports = router;

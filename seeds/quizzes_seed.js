// Dummy created for testing.
const quizData = require('../data/questions');

exports.seed = (knex, Promise) => {
 const quizzes = [];

 quizData.forEach((quiz) => {
  quizzes.push(addQuizData(knex, quiz));
 });
 // Each insert returns a promise. Wait for all promises to resolve.
 return Promise.all(quizzes);
};

function addQuizData(knex, quiz) {
 return knex.table('quizzes')
   .insert(
   {
     name: quiz.name,
     question_count: quiz.questionCount,
     difficulty: quiz.difficulty,
     questions: JSON.stringify(quiz.questions)
   }
 );
};



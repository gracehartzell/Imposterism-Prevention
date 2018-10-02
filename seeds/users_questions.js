const usersData = require('../data/users');
const questionsData = require('../data/questions');

exports.seed = function(knex, Promise) {
  return knex('questions').del()
  .then(() => {
    return knex('users').del();
  })
  .then(() => {
    return knex('users').insert(usersData);
  })
  .then(() => {
    let questionPromises = [];
    questionsData.forEach((question) => {
      let user = question.user;
      questionPromises.push(createQuestion(knex, question, user));
    });
    return Promise.all(questionPromises);
  });
};
const createQuestion = (knex, question, user) => {
  return knex('users').where('username', user).first()
  .then((userRecord) => {
    return knex('questions').insert({
      content: question.content,
      choices: question.choices,
      user_id: userRecord.id
    });
  });
};

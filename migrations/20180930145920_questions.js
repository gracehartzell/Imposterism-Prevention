exports.up = function(knex, Promise) {
  return knex.schema.createTable('questions', (table) => {
      table.increments('question_id').primary();
      table.string('category');
      table.string('question_name');
      table.string('content');
      table.string('answerChoice_1');
      table.string('answerChoice_2');
      table.string('answerChoice_3');
      table.string('answerChoice_4').nullable();
      table.string('answerChoice_5').nullable();
      table.boolean('isAnswer')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('questions');
};

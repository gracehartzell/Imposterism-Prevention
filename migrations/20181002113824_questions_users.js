exports.up = function(knex, Promise) {
    return Promise.all([
      knex.schema.createTable('users', (table) => {
        table.increments('id').primary();
        table.string('email');
        // table.string('token');
        table.string('password');
        // table.timestamp('created_at');
      }),

      knex.schema.createTable('quizzes', (table) => {
        table.increments('id').primary();
        table.string('name');
        table.integer('question_count')
        table.json('questions');
        table.integer('difficulty');
      })
    ]);
  };

  exports.down = function(knex, Promise) {
    return Promise.all([
      knex.schema.dropTable('quizzes'),
      knex.schema.dropTable('users')
    ]);
  };
exports.up = function(knex, Promise) {
    return Promise.all([
      knex.schema.createTable('users', (table) => {
        table.increments('id').primary();
        table.string('username');
        // table.string('token');
        table.string('password');
        // table.timestamp('created_at');
      }),

      knex.schema.createTable('questions', (table) => {
        table.increments('id').primary();
        table.string('name');
        table.integer('question_count')
        table.string('questions');
        table.string('choices');
        table.string('content');
        table.integer('index');
        table.boolean('isCorrect');
        table.string('answer');
        table.integer('user_id').unsigned()
          .references('users.id');
      })
    ]);
  };

  exports.down = function(knex, Promise) {
    return Promise.all([
      knex.schema.dropTable('questions'),
      knex.schema.dropTable('users')
    ]);
  };
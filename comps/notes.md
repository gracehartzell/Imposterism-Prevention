# Knex, PostgreSQL:
Source: [*Seed Knex PostgreSQL Database with JSON Data*](https://medium.com/@jaeger.rob/seed-knex-postgresql-database-with-json-data-3677c6e7c9bc)

Knex is compatible with many databases (e.g. MySQL, PostgreSQL). 


## Setup and Installation:
To install: 
```
npm init --yes
npm install --save knex pg
npm install knex -g
knex init
```
* knex init creates a knex configuration file (knexfile.js) which sets up how the interactions between knex, various environments (e.g. development), and the database occur. 

Skipping ahead to building the tables using knex migrations.
Format: 
```
knex migrate:make table_name
```

You can actually just make one migration and put multiple tables in there, so I'll save that for refactoring maybe. Or do it now. 

Running a migration:
```
knex migrate:latest
```

To specify a different environment (e.g. test):
```
knex migrate:latest --env test
```

## Seed Data:
**Must make sure queries in the seed file fulfill promises, otherwise all queries will be executed but will not be seedable.**
Taking the pseudocode from the article:

```
1. Load the JSON data from each data file
2. Create a knex seed (and export it)
3. Delete any existing data in all of the tables
4. Seed all of the merchants first because we need the primary key to exist as a foreign key for each product
5. Seed each product
  - Create an empty array where each promise will go
  - Find the merchant 'id' for the current product being inserted
  - Insert the product with the merchant 'id' as the foreign key
6. Resolve all of the product's promises
```

Generating a seed file for the development environment:
```
knex seed:make table_name --env development
```

Seed file code:
```js
// merchants_products.js (seed file name)
const usersData = require(‘../../../data/users’);
const questionsData = require(‘../../../data/questions’);

exports.seed = function(knex, Promise) {
  return knex(‘questions’).del()
  .then(() => {
    return knex(‘users’).del();
  })
  .then(() => {
    return knex(‘users’).insert(usersData);
  })
  .then(() => {
    let questionPromises = [];
    questionsData.forEach((question) => {
      let user = question.user;
      questionPromises.push(createquestion(knex, question, user));
    });
    return Promise.all(questionPromises);
  });
};
const createQuestion = (knex, question, user) => {
  return knex(‘users’).where(‘name’, user).first()
  .then((userRecord) => {
    return knex(‘questions’).insert({
      content: question.content,
      choices: question.choices,
      user_id: userRecord.id
    });
  });
};

```
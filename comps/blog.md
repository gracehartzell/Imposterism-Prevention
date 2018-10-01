# What in the Wide Wide World of Sports is Going On?

## Sub-Zero:
Quarter projects were approaching and I hadn't the slightest idea of what to do mine on so I started poking around to see what might be good. My first thought was to make a site that might be thought of as a cross between Yelp and Reddit for finding mental health and substance abuse counselors based on actual patients' thoughts and experiences. Long story short, I was pushed away and gravitated towards my current project because, frankly, I need a lot of review for just about everything we did in the first quarter and now is the time to get on it. 

## Ground Zero:


## Day One(ish):
I set up the layout for the app in the same way as we've done in previous exercises (aka [Killbase](https://grace-killbase.herokuapp.com/)). Here's where I encountered my *FIRST MAJOR ROADBLOCK*: ERDs, quiz banks, and Postgres... Oh my! In particular, how am I going to make all the right formatting that I can do with JS with this table? Here's what I was looking at working with:

**Option 1:**

```js
const scopeQuiz = {
    //id or wait until db?
    name: 'JavaScript Scopes',
    questionCount: 10,
    questions: [
        {
        content: "After the following code runs, what will be the value of `result`?\n\n```javascript\nvar x = 30;\n\nfunction get () { return x; }\n\nvar result = get(20);\n```",
        choices: [
            {
                text: "10",
                isAnswer: false
            },
            {
                text: "24",
                isAnswer: false
            },
            {
                text: "30",
                isAnswer: true
            },
            {
                text: "50",
                isAnswer: false
            }
        ],
        answer: {expected: [2], actual: []}
        } 
        // ... 
    ]
}
```
vs.

**Option 2:**

```js
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
```

*First, if you see that and immediately think I'm crazy for not knowing the right way to do it, you're probably right and I'd love for you to guide me in the right direction. Unfortunately, my main (possibly only) audience is my Github repo, so I'll keep poking elsewhere.*
I'm particularly drawn to the first option because that way, I can actually go through and get some much needed practice with objects and it just doesn't look as mangled and foreboding. 

## Day Two (AKA 1st October):
So I had a little chat and realized that neither of my aforementioned methods of making a quiz bank were good. There's now a data folder with my test questions in a .json file. 

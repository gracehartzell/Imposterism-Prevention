# What in the Wide Wide World of Sports is Going On?

## Sub-Zero:
Quarter projects were approaching and I hadn't the slightest idea of what to do mine on so I started poking around to see what might be good. My first thought was to make a site that might be thought of as a cross between Yelp and Reddit for finding mental health and substance abuse counselors based on actual patients' thoughts and experiences. Long story short, I was pushed away and gravitated towards my current project because, frankly, I need a lot of review for just about everything we did in the first quarter and now is the time to get on it. 

## Ground Zero:


## Day One, *The Tea Tantrum*:
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

## Day Two (1 October, *Slug Day*):
So I had a little chat and realized that neither of my aforementioned methods of making a quiz bank were good. There's now a data folder with my test questions in a .json file. 


## Day Three, *The Morning Meltdown*
As the alternate title would suggest, I had a meltdown this morning. Not being able to get a navbar done the exact way I wanted it was what set it off. It was very silly because I've done some neat navbars before. As a result, I decided to completely back off from doing any styling and go back to trying to get the quiz table and pages to work. That said, I found a Medium article by Robbie Jaeger entitled [*Seed Knex PostgreSQL Database with JSON Data*](https://medium.com/@jaeger.rob/seed-knex-postgresql-database-with-json-data-3677c6e7c9bc). 

Two things you should note: 
1. One of the quiz topics is JS promises.
2. Database queries are promise-based. 

See what I did there? 
So I ended up spending the entire day trying to figure out how to get this enormous JSON file to work with my database. Long story short, my biggest accomplishment/progress was completing all 24 levels of Flexbox Froggy and getting my cat to agree to share the office chair instead of her kicking me out. Today was one of 'those' days where it feels like nothing was accomplished other than tearing me down.  
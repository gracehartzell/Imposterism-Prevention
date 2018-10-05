# Imposterism Prevention

Do you ever feel like you don't belong where you are? Maybe you know you're right around the same knowledge level as those around you but still can't come to terms with it? Or maybe you just did a project that was too difficult to do in a week and started to feel incompetent? The goal of this site is to help you gain more confidence in your actions and get back out there knowing you do know something. While it may lack certain bells and whistles, the quiz lets you know if you've answered the question correctly by changing the color of the answer choice. 

* Peep my user stories in the "Projects" tab.
* Peep my code in all those folders. 
* **Check out my experience by reading my makeshift [blog](https://github.com/gracehartzell/galvanizeQ2/blob/master/comps/blog.md)**

**To Use:**
1. Check out the [deployed site](https://grace-q2.herokuapp.com/)!
2. Fork and/or clone this beast. Then run the server:
```
nodemon server.js
```


**To View without Using**
1. Screenshots below
2. Navigate to the comps folder and check out the videos from there (for now, you'll just have to download the video since the file size is too large).

## Database
I used two tables, users and questions, but focused primarily on getting the questions table up and working. As you can check out in the blog, getting it set up was very tricky and very much outside of my realm of knowledge. Consequently, everything outside the realm of the quiz itself was not fully developed. 

**Quiz/Questions**
All of the quizzes were exported from a JavaScript file as JSON and then uploaded to the database from there. Feel free to check out the data file to see just how in depth it went and get an idea as to why it took so long to manipulate. This is how I eventually seeded the quiz data:
 ```js
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
 ```

**Users**
As far as the user portal is concerned, you can add a new user to the table via the sign up page. I was not able to issue a token or authenticate pre-registered users. This is something that I'd like to be able to do in the future. Another reach goal is to be able to link the users to quizzes that they've taken. 

All in all, I'm not very pleased with the outcome but I do recognize that the majority of the work was well outside of my comfort zone. 






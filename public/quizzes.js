console.log('CONNECTED');
const questions = quiz.questions;

const buttons = Array.from(document.getElementsByClassName('answerChoice'));
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    console.log(questions);
    
  });
});






// var converter = new showdown.Converter(),
//     text = '# hello, markdown!',
//     html = converter.makeHtml(text);

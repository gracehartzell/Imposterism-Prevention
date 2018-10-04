console.warn('CONNECTED');

const button = document.getElementById('answerChoice');
button.addEventListener('click', () => {
  document.getElementById('quiz').innerHTML = 'HELLO';
});
console.warn(question.choices);

// var converter = new showdown.Converter(),
//     text = '# hello, markdown!',
//     html = converter.makeHtml(text);

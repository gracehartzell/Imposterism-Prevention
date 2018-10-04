console.warn('CONNECTED');

let button = document.getElementById('answerChoice');


for (var i = 0 ; i < button.length; i++) {
    button[i].addEventListener('click' , (ev) => {
        return correctAnswer();
    }) ; 
}



function correctAnswer() {
    if (button === 'true') {
        console.warn('CORRECT ANSWER');
    }
    else {
        alert('NOPE');
    }
}


// const quizContainer = document.getElementById('quiz');
// const resultsContainer = document.getElementById('results');
// const submitButton = document.getElementById('submit');
console.log('CONNECTED');

let correct = 0;
let incorrect = 0;
const alreadyAnswered = [];

const buttons = Array.from(document.getElementsByClassName('answerChoice'));

function onButtonClick(currentButton) {
  console.log({ correct, incorrect, alreadyAnswered })

  const isAnswer = currentButton.getAttribute("data-answer");
  const questionIndex = currentButton.getAttribute("data-question");
  // Find out if this question has been answered.
  let questionAnsweredAlready = alreadyAnswered.includes(questionIndex)
  if(!questionAnsweredAlready) {
    alreadyAnswered.push(questionIndex);
  }
  if (isAnswer === "true") {
    currentButton.style.background = "green"
    if(!questionAnsweredAlready) { // Only update if this is the first time answering this question
      correct++;
    }
    const btns = Array.from(document.querySelectorAll(`[data-question='${questionIndex}']`));
    
    btns.forEach((button) => {
      if(button !== currentButton) {
        button.style.background = "#b2b2e0"
      }
    });

  } else {
    currentButton.style.background = "red"
    if(!questionAnsweredAlready) { // Only update if this is the first time answering this question
      incorrect++
    }
    const btns = Array.from(document.querySelectorAll(`[data-question='${questionIndex}']`));
    
    btns.forEach((button) => {
      if(button !== currentButton) {
        button.style.background = "#b2b2e0"
      }
    });
  }
}

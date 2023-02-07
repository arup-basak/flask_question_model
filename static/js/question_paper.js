const options = document.querySelectorAll('.option')
const questionContainer = document.querySelectorAll('.question_container')

const previousButton = document.querySelector('#previous')
const nextButton = document.querySelector('#next')

let current = -1
let totalQuestions = questionContainer.length;

const answers = Array.from({ length: options.length }).fill(-1);
const question_state = Array.from({ length: options.length }).fill(-1); //nothing = -1, viewed = 0, marked = 1, for_later = 2

for (let i = 0; i < options.length; i++) {
    options[i].addEventListener("click", () => {
        answers[current] = i;
    });
}

const setQuestion = (questionNumber) => {
    if (current != -1) {
        questionContainer[current].style.display = 'none'
        if (question_state[questionNumber] == -1) {
            question_state[questionNumber] = 0
        }
    }
    questionContainer[questionNumber].style.display = 'block'
    current = questionNumber
    if (current == 0) {
        previousButton.disabled = true;
    }
    else if (current == totalQuestions-1) {
        nextButton.disabled = true
    }
    else {
        previousButton.disabled = false;
        nextButton.disabled = false
    }
}

previousButton.addEventListener('click', () => {
    setQuestion(current -1)
})

nextButton.addEventListener('click', () => {
    setQuestion(current + 1)
})

setQuestion(0)
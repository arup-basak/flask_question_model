const options = document.querySelectorAll('.option')
const questionContainer = document.querySelectorAll('.question_container')

let current = -1

const answers = Array.from({ length: options.length }).fill(-1);
const question_state = Array.from({ length: options.length }).fill(-1); //nothing = -1, viewd = 0, marked - 1, for_later = 2

for (let i = 0; i < options.length; i++) {
    options[i].addEventListener('click', () => {
        answers[current] = i 
    })
}

const setQuestion = (questionNumber) => {
    if (current != -1) {
        questionContainer[current].style.display = 'none'
        if (question_state(questionNumber) == -1) {
            question_state(0)
        }
    }
    questionContainer[questionNumber].style.display = 'block'
    current = questionNumber
}

setQuestion(0)
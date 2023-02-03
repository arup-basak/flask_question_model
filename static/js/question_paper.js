const options = document.querySelectorAll('.option')

let current = 0
const answers = Array.from({ length: options.length }).fill(-1);

for (let i = 0; i < options.length; i++) {
    options[i].addEventListener('click', () => {
        answers[current] = i 
    })
}

const changeQuestion = (questionNumber) => {
    current = questionNumber
}
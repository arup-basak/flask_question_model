const options = document.querySelectorAll('.option')
const questionContainer = document.querySelectorAll('.question_container')
const questionButtons = document.querySelectorAll(".question_buttons");

const previousButton = document.querySelector('#previous')
const nextButton = document.querySelector('#next')
const markButton = document.querySelector('#mark')

const submit = document.querySelector('#submit')


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

markButton.addEventListener('click', () => {
    const markedClassName = "marked_for_letter";
    if (!questionButtons[current].classList.contains(markedClassName)) {
        questionButtons[current].classList.add(markedClassName);
    }
    else {
        questionButtons[current].classList.remove(markedClassName)

    }
})

submit.addEventListener("click", () => {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', '/exam/answers')
    xhttp.send("This is Sent by My Device")
    xhttp.onload = function() {
        // if (xhttp.status != 200) { // analyze HTTP status of the response
        //   console.log(`Error ${xhttp.status}: ${xhttp.statusText}`); // e.g. 404: Not Found
        // } else { // show the result
        //   console.log(`Done, got ${xhttp.response.length} bytes`); // response is the server response
        // }
        console.log(xhttp.response)
      };
      
      xhttp.onprogress = function(event) {
        console.log(event)
        // if (event.lengthComputable) {
        //   console.log(`Received ${event.loaded} of ${event.total} bytes`);
        // } else {
        //   console.log(`Received ${event.loaded} bytes`); // no Content-Length
        // }
      
      };
      
      xhttp.onerror = function() {
        alert("Request failed");
      };
})

setQuestion(0)
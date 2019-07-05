const data = [{
    category: 'english-dutch', 
    questions: ['Garden', 'Table', 'Chair', 'Car', 'Window'],
    answers: ['Tuin', 'Tafel', 'Stoel', 'Auto', 'Raam']
    },
    {
    category: 'english-portuguese', 
    questions: ['Garden', 'Table', 'Chair', 'Car', 'Window'],
    answers: ['Jardim', 'Mesa', 'Cadeira', 'Carro', 'Janela']
    } 
]

// const data = [
//     {question: "Hello", answer: "Hallo"}, 
//     {question: "Hello", answer: "Hallo"}, 
// ]

const translateTo = document.getElementById('translate-to')
const h1 = document.createElement('h1')
h1.innerHTML = "Translate to Dutch"
const h2 = document.createElement('h2')
h2.innerHTML = data[1].questions[Math.floor(Math.random() * data[1].questions.length)]
const box = document.getElementById('box')

box.appendChild(h2);
translateTo.appendChild(h1);

function randQuestion(){
    rand = data[1].questions[Math.floor(Math.random() * data[1].questions.length)]
    h2.innerHTML = rand;
}

function showAnswer() {
    if (h1.innerHTML == "Translate to Dutch") {
        for (let i = 0; i < data[0].questions.length; i++) {
            if (h2.innerHTML == data[0].questions[i]) {
                h2.innerHTML = null
                h2.innerHTML = data[0].answers[i]
            }
        }
    } else {
        for (let i = 0; i < data[1].questions.length; i++) {
            if (h2.innerHTML == data[1].questions[i]) {
                h2.innerHTML = null
                h2.innerHTML = data[1].answers[i]
            }
        }
    }
}

const question = document.getElementById('question')
const answer = document.getElementById('answer')

// function addData() {
//     data.questions.push(question.value)
//     data.answers.push(answer.value)

//     question.value = null
//     answer.value = null
// }
function translateDutch() {
    h1.innerHTML = null
    h1.innerHTML = "Translate to Dutch"
    for(let i = 0; i < data[1].answers.length; i++){
        if(h2.innerHTML === data[1].answers[i]){
            h2.innerHTML = data[1].questions[i]
        }
    }
    
    //  for(let i = 0; i < data[0].questions.length; i++){
    //      if(h2.innerHTML == data[0].questions[i]){
    //          h2.innerHTML = null
    //          h2.innerHTML = data[0].answers[i]
    //      }
    //  }
}

function translatePortuguese() {
    h1.innerHTML = null
    h1.innerHTML = "Translate to Portuguese"
    for (let i = 0; i < data[0].answers.length; i++){
        if(h2.innerHTML === data[0].answers[i]){
        h2.innerHTML = data[0].questions[i]
    }
    }
    
    //  for(let i = 0; i < data[1].questions.length; i++){
    //      if(h2.innerHTML == data[1].questions[i]){
    //          h2.innerHTML = null
    //          h2.innerHTML = data[1].answers[i]
    //      }
    //  }
}

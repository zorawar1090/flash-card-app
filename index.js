const data = {
    questions: ['Garden', 'Table', 'Chair', 'Car', 'Window'],
    answers: ['Tuin', 'Tafel', 'Stoel', 'Auto', 'Raam']
}

const rand = data.questions[Math.floor(Math.random() * data.questions.length)]

const h2 = document.createElement('h2')
h2.innerHTML = rand;
const box = document.getElementById('box')

box.appendChild(h2);

function showAnswer(){
    for(let i = 0; i < data.questions.length; i++){
        if(rand == data.questions[i]){
            h2.innerHTML = null
            h2.innerHTML = data.answers[i]
        }
    }
}

const question = document.getElementById('question')
const answer = document.getElementById('answer')

function addData() {
    data.questions.push(question.value)
    data.answers.push(answer.value)
}
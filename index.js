const data = {
    questions: ['Garden', 'Table', 'Chair', 'Car', 'School']
}

const rand = data.questions[Math.floor(Math.random() * data.questions.length)]

const h2 = document.createElement('h2')
h2.innerHTML = rand;
const box = document.getElementById('box')

box.appendChild(h2);


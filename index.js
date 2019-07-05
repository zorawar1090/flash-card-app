const data = {
    questions: ['Garden', 'Table', 'Chair', 'Car', 'School']
}

const rand = data.questions[Math.floor(Math.random() * data.questions.length)]

const p = document.createElement('p')
p.innerHTML = rand;
const box = document.getElementById('box')

box.appendChild(p);


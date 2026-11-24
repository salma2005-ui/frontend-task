const card = document.getElementById('profileCard');
const nameEl = document.getElementById('studentName');
const bioEl = document.querySelector('#studentBio');
const imgEl = document.querySelector('#profileImg');
const buttons = document.querySelectorAll('button');


nameEl.textContent = 'Salma S greda';
document.getElementById('studentInfo').innerHTML = '<b>Major:</b> bis <br> <b>Level:</b> 4th Year';


console.log(imgEl.getAttribute('src'));
console.log(imgEl.getAttribute('alt'));
imgEl.setAttribute('alt', 'Salma Profile Photo');
imgEl.setAttribute('title', 'Student Profile');


bioEl.style.color = '#d6336c';
bioEl.style.fontWeight = 'bold';


document.getElementById('darkModeBtn').addEventListener('click', () => {
card.classList.toggle('dark');
 console.log('Has dark class?', card.classList.contains('dark'));
 });

document.getElementById('highlightBtn').addEventListener('click', () => {
    card.classList.add('highlight');
});

document.getElementById('changeNameBtn').addEventListener('click', () => {
    nameEl.textContent = 'Salma 🌷';
    card.classList.remove('highlight');
});


const skills = ['HTML', 'CSS', 'JavaScript', 'DOM', 'GitHub'];
const container = document.getElementById('skillsContainer');

skills.forEach(skill => {
    const span = document.createElement('span');
    span.textContent = skill;
    span.classList.add('skill');
    container.appendChild(span);
});


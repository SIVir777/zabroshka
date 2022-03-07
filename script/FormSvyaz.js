const knop = document.querySelector('.hover-knop');
const modal = document.querySelector('.modal-okno-parent');
const krestik = document.querySelector('.krestik');
const card = document.querySelector('.modal-okno');

const form = document.querySelector('#form-data');
const knopCard = document.querySelector('#knop-modal-okna');
const userName = document.querySelector('.uName');
const email = document.querySelector('.e-adres');
const message = document.querySelector('.pole-soob');

knop.addEventListener('click', function() {
    modal.classList.remove('hidden-modal');
    document.body.style.overflow = 'hidden';
});
krestik.addEventListener('click', function() {
    modal.classList.add('hidden-modal');
    document.body.style.overflow = '';
});
modal.addEventListener('click', function() {
    modal.classList.add('hidden-modal');
    document.body.style.overflow = '';
});
card.addEventListener('click', function(event) {
    event.stopPropagation();
});

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(form);
    userName.value = '';
    email.value = '';
    message.value = '';
    modal.classList.add('hidden-modal');
    const objectData = Object.fromEntries(formData.entries());
    console.log(objectData);
    socket.send(JSON.stringify(objectData));
});

const socket = new WebSocket('ws://localhost:7000/datauser');

socket.onopen = function() {

};

socket.onmessage = function() {

};

socket.onerror = function() {
    console.log('WebSocket error');
};

socket.onclose = function() {

};
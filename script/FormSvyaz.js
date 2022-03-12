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
    document.body.style.overflow = '';
    const objectData = Object.fromEntries(formData.entries());
    proverka(objectData);
    function proverka() {
        if (!(socket.readyState == 1)) {
            if (socket.readyState != 0) {
                socket.close();
                setTimeout(function() {
                    socket = new WebSocket('wss://zabroshkaws.herokuapp.com/datauser');
                }, 250); 
            };
            setTimeout(function() {
                proverka();
                return;
            }, 1500);
        } else {
            socket.send(JSON.stringify(objectData));
            return;
        };
    };
});

let socket = new WebSocket('wss://zabroshkaws.herokuapp.com/datauser');
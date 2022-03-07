const gamburgerKnop = document.querySelector('.gamburger');
const menu = document.querySelector('.menu2');
const ssilki = document.querySelectorAll('.menu2-knop');
const titleVvodniy = document.querySelector('.title-vvodniy');
const sovetiPov = document.querySelector('.title-soveti-povedeniya');
const titleZakaz1 = document.querySelector('.title-zakaz');

gamburgerKnop.addEventListener('click', function() {
    menu.classList.toggle('hidden-menu');
});

document.addEventListener('click', function() {
    menu.classList.add('hidden-menu');
});

gamburgerKnop.addEventListener('click', function(event) {
    event.stopPropagation();
});

menu.addEventListener('click', function(event) {
    event.stopPropagation();
});

ssilki.forEach(function(knopka) {
    knopka.addEventListener('click', function() {
        menu.classList.add('hidden-menu');
        if (this.id == 'menu-o-nas') {
            titleVvodniy.scrollIntoView({behavior: 'smooth'});
        } else if (this.id == 'menu-pr-bezop') {
            sovetiPov.scrollIntoView({behavior: 'smooth'});
        } else if (this.id == 'menu-zakaz') {
            titleZakaz1.scrollIntoView({behavior: 'smooth'});
        };
    });
});
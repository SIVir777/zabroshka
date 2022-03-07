const knopEffect = document.querySelector('.hover-knop');
const knopOsnov = document.querySelector('.knop-svyaz');
const konturKnop = document.querySelector('.effect-kontur');

knopEffect.addEventListener('mouseover', function() {
    knopOsnov.style.color = '#fff';
    knopOsnov.style.background = '#1F75FE';
});

knopEffect.addEventListener('mouseout', function() {
    knopOsnov.style.color = '#000';
    knopOsnov.style.background = '#fff';
});

setInterval(function() {
    setTimeout(function() {
        konturKnop.style.transition = 'all ease 0.7s';
        konturKnop.style.padding = '30px';
        konturKnop.style.top = '-1.7em';
        konturKnop.style.left = '1.59em';
        konturKnop.style.opacity = '0';
    }, 0);
    
    setTimeout(function() {
        konturKnop.style.transition = '0s';
        konturKnop.style.padding = '0 4px 6px 0';
        konturKnop.style.left = '3.35em';
        konturKnop.style.top = '0';
        konturKnop.style.opacity = '1';
    }, 1020);
}, 1040);
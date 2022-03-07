// document.addEventListener('click', function() {
//     console.log(window.pageYOffset);
// });
document.addEventListener('click', function() {
}); 

const firstTitle = document.querySelector('.title-vvodniy');
const soveti = document.querySelector('.title-soveti-povedeniya');
const titleZakaz = document.querySelector('.title-zakaz');
const menuOnas = document.querySelector('#menu-o-nas');
const menuBezop = document.querySelector('#menu-pr-bezop');
const menuZakaz = document.querySelector('#menu-zakaz');

menuOnas.addEventListener('click', function() {
    firstTitle.scrollIntoView({behavior: 'smooth'});
});

menuBezop.addEventListener('click', function() {
    soveti.scrollIntoView({behavior: 'smooth'});
});

menuZakaz.addEventListener('click', function() {
    titleZakaz.scrollIntoView({behavior: 'smooth'});
});
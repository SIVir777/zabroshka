const chel3 = document.querySelector('.chel3');
const ohrannik = document.querySelector('.ohrannik');

animate27();
setInterval(function() {
    animate27();
}, 8300);

function animate27() {
    setTimeout(function() {
        ohrannik.style.transition = 'left 2s ease';
        ohrannik.style.transform = 'translate(0) rotate(0)';
        ohrannik.style.opacity = '1';
    }, 2250);
    
    setTimeout(function() {
        chel3.style.transform = 'translateY(35%) rotate(89deg)';
    }, 2500);
    
    setTimeout(function() {
        ohrannik.style.left = '70px';
    }, 2250);
    
    setTimeout(function() {
        ohrannik.style.transition = 'left 3s linear';
        ohrannik.style.transform = 'scale(-1, 1)';
        ohrannik.style.left = '400px';
    }, 4500);
    
    setTimeout(function() {
        ohrannik.style.opacity = '0';
    }, 7500);
    
    setTimeout(function() {
        chel3.style.transform = 'translate(0) rotate(0)';
    }, 8500);
};
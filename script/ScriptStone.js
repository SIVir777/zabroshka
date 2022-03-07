const hand = document.querySelector('.hand');
const stone = document.querySelector('.stone');
const chel2 = document.querySelector('.chel2');

animate();
setInterval(function() {
    animate();
}, 2050);

function animate() {
    setTimeout(function() {
        hand.style.transition = 'transform 0.55s cubic-bezier(.43,.35,.81,.37)';
        hand.style.transform = 'translate(550%, -150%) rotate(155deg)';
    }, 10);
        
    setTimeout(function() {
        stone.style.transition = 'bottom 1.5s cubic-bezier(.14,.62,.42,.9), left 1.5s cubic-bezier(.14,.62,.42,.9)';
        stone.classList.remove('hidden');
        stone.style.left = '782px';
        stone.style.bottom = '260px';
    }, 550);
    
    setTimeout(function() {
        stone.style.left = '40px';
        stone.style.bottom = '187px';
        stone.classList.add('hidden');
        stone.style.transition = 'all 0s';
        hand.style.transform = 'translate(530%, -75%) rotate(20deg)';
        hand.style.transition = 'all 0s';
    }, 2050);
};
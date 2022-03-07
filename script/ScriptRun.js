const chel = document.querySelector('.chel');

function animation({duration, draw, timing}) {
    const start = performance.now();
    requestAnimationFrame( function povt(time) {
        let progress = (time - start) / duration;
        timing(progress);
        draw(timing(progress));
        if (progress < 1) {
            requestAnimationFrame(povt);
        };
    });
};

// const FirstContainer = document.querySelector('.container');
// let probegChel = getComputedStyle(FirstContainer).width;
// console.log(probegChel);
// let probeg = Number(probegChel.slice(0, probegChel.length - 2));

function srazu() {
    animation({
        duration: 8000,
        timing: function(progress) {
            return progress;
        }, 
        draw: function(prog) {
            chel.style.left = 1000 * prog + 'px'; 
        },
    });
    setTimeout(function() {
        chel.style.transform = 'translateY(-5%)';
    }, 1000);
    setTimeout(function() {
        chel.style.transform = 'translateY(64.5%)';
    }, 1800);
    setTimeout(function() {
        chel.style.transform = 'translateY(-5%)';
    }, 3500);
    setTimeout(function() {
        chel.style.transform = 'translateY(64.5%)';
    }, 5000);
    setTimeout(function() {
        chel.style.transform = 'translateY(-5%)';
    }, 6000);
    setTimeout(function() {
        chel.style.transform = 'translateY(64.5%)';
    }, 7000);
};
srazu();

setInterval(function() {
    animation({
        duration: 8000,
        timing: function(progress) {
            return progress;
        }, 
        draw: function(prog) {
            chel.style.left = 1000 * prog + 'px'; 
        },
    });
    setTimeout(function() {
        chel.style.transform = 'translateY(-5%)';
    }, 1000);
    setTimeout(function() {
        chel.style.transform = 'translateY(64.5%)';
    }, 1800);
    setTimeout(function() {
        chel.style.transform = 'translateY(-5%)';
    }, 3500);
    setTimeout(function() {
        chel.style.transform = 'translateY(64.5%)';
    }, 5000);
    setTimeout(function() {
        chel.style.transform = 'translateY(-5%)';
    }, 6000);
    setTimeout(function() {
        chel.style.transform = 'translateY(64.5%)';
    }, 7000);

}, 8000);
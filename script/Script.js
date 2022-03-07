const strokaKnop = document.querySelectorAll('.stroka-tur');
strokaKnop.forEach( function(item) {
    const text = item.querySelectorAll('.text-tur');
    const triangleI = item.querySelectorAll('.triangle');
    text.forEach( function(item2) {
        item2.addEventListener('click', function() {
            const imgTur = this.parentNode.nextElementSibling;
            const triangle = this.previousElementSibling;
            if (imgTur.classList.contains('hidden-img-tur')) {
                triangle.style.right = '50px';
                imgTur.classList.remove('hidden-img-tur');
            } else {
                triangle.style.right = '0';
                imgTur.classList.add('hidden-img-tur');
            };
        });
    });
    triangleI.forEach( function(item2) {
        item2.addEventListener('click', function() {
            const imgTur = this.parentNode.nextElementSibling;
            if (imgTur.classList.contains('hidden-img-tur')) {
                item2.style.right = '50px';
                imgTur.classList.remove('hidden-img-tur');
            } else {
                item2.style.right = '0';
                imgTur.classList.add('hidden-img-tur');
            };
        });
    });
});

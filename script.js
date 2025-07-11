window.onload = function() {
    document.body.style.opacity = 1;
};

document.addEventListener('scroll', function() {
    var movingBackground = document.querySelector('.moving-background');
    var scrollPosition = window.pageYOffset;
    movingBackground.style.transform = 'translateY(' + scrollPosition * 0.1 + 'px)';
});
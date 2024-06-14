document.addEventListener('DOMContentLoaded', function() {
    const animatedText = document.querySelector('.animated-text');
    let direction = 1;
    setInterval(() => {
        animatedText.style.transform = `translateX(${direction * 10}px) translateY(${direction * 10}px)`;
        direction = -direction;
    }, 1500);
});

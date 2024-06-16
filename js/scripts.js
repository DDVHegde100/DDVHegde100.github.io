document.addEventListener('DOMContentLoaded', function() {
    const preloader = document.getElementById('preloader');
    const header = document.querySelector('header');

    // Hide header during preloader animation
    header.classList.add('hidden');

    // Fade out and hide preloader after delay
    setTimeout(function() {
        preloader.classList.add('fade-out');
        setTimeout(function() {
            preloader.style.display = 'none';
            header.classList.remove('hidden'); // Show header after preloader hides
        }, 100); // Additional delay before hiding preloader
    }, 3500); // Adjust timing as needed

    const cursor = document.querySelector('.custom-cursor');

    // Cursor movement based on mouse position
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.pageX + 'px';
        cursor.style.top = e.pageY + 'px';

        // Determine brightness of background for cursor color change
        const backgroundColor = getComputedStyle(document.body).getPropertyValue('background-color');
        const brightness = getBrightness(backgroundColor);

        // Toggle class based on brightness for cursor style change
        if (brightness > 128) {
            cursor.classList.add('hover-white');
        } else {
            cursor.classList.remove('hover-white');
        }
    });

    // Typing animation setup
    const typingText = document.querySelector('.typing-text');
    const textArray = [
        "Welcome, I’m Dhruv Hegde, a rising senior at Salem High School with primary interests in mechanical and computer engineering and a passion for aerospace design and astrophysics as well. I assume you’re here to learn more about me or seek to learn about the various projects I am undertaking in my freetime; fortunately, you’re in the right place. This website includes countless ideas and projects I have conceptualized or completed that I want to show the world and I hope you can get some value out of it. Although these are not all of my projects and a lot of major experiences are not included below, I am continuously updating this page with extraneous information about myself, and, who knows, I might possible add some of those one day, so feel free to check back in from time to time. ",
    ];
    const typingDelay = 30;
    const erasingDelay = 50;
    const newTextDelay = 200;

    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            typingText.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typingText.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            textArrayIndex = (textArrayIndex + 1) % textArray.length;
            setTimeout(type, typingDelay);
        }
    }

    setTimeout(type, newTextDelay + 250); // Start typing animation after initial delay

    function getBrightness(color) {
        const rgb = color.match(/\d+/g);
        if (!rgb) return 255;
        return (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
    }

});

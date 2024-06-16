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
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultricies semper accumsan. Nulla luctus justo id libero vehicula fermentum. Curabitur dapibus ultrices ligula, et ullamcorper ex malesuada ac. Phasellus sit amet metus volutpat, egestas ligula ac, consectetur risus. Cras tincidunt eros sit amet nisi hendrerit, et rutrum magna venenatis. Sed laoreet purus a pretium faucibus. Vivamus iaculis nibh nec est volutpat, sit amet suscipit nisi efficitur. Fusce id metus vel risus consectetur tempus. Donec varius lectus sit amet mi ultrices, ac fermentum nisi volutpat. Sed id elit orci. Sed vitae metus nec justo finibus iaculis. Nam non risus tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque nec augue vel ex blandit fringilla a sit amet nisl. Phasellus maximus neque non gravida rutrum.",
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam non risus enim. Nam tincidunt lorem ut odio pharetra feugiat. In non turpis orci. Nam sed efficitur nulla. Phasellus et ex sed libero consectetur elementum. Morbi sit amet feugiat magna. Phasellus euismod risus eget lectus posuere egestas. Quisque varius orci ac eros dictum, id cursus est feugiat. Nulla facilisi. Cras at mi eu velit congue sagittis non quis nulla. Etiam nec urna ac ex scelerisque dignissim. Aliquam semper quam a leo fringilla, in congue nisi bibendum. Duis eu risus a augue venenatis bibendum."
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

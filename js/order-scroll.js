document.addEventListener('DOMContentLoaded', function () {
    const orderButtons = document.querySelectorAll('.smooth-scroll-btn');
    const contactForm = document.getElementById('contact-form');

    function smoothScrollTo(targetY, duration = 1200) {
        const startY = window.scrollY;
        const distanceY = targetY - startY;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            const ease = easeInOutQuad(progress);
            window.scrollTo(0, startY + distanceY * ease);

            if (progress < 1) {
                requestAnimationFrame(animation);
            }
        }

        function easeInOutQuad(t) {
            return t < 0.5
                ? 2 * t * t
                : -1 + (4 - 2 * t) * t;
        }

        requestAnimationFrame(animation);
    }

    orderButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();

            if (contactForm) {
                const targetY = contactForm.getBoundingClientRect().top + window.scrollY;
                smoothScrollTo(targetY);
            }
        });
    });
});

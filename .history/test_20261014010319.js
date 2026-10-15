
(function () {
    "use strict";

    function toggleScrolled() {
        const selectHeader = document.querySelector('#header');

        if (!selectHeader) return;

        if (
            window.scrollY > 100
        ) {
            selectHeader.classList.add('header-scrolled');
        } else {
            selectHeader.classList.remove('header-scrolled');
        }
    }

    window.addEventListener('scroll', toggleScrolled);
    window.addEventListener('load', toggleScrolled);

})();

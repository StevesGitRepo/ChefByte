function printInvoke() {
    window.print();
};

const observer5 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            return;
        }
    });
});

const hiddenElementsLeft = document.querySelectorAll('.hidden-from-left');
hiddenElementsLeft.forEach((el) => observer5.observe(el));

const hiddenElementsTop = document.querySelectorAll('.hidden-from-top');
hiddenElementsTop.forEach((el) => observer5.observe(el));

const hiddenElementsTop = document.querySelectorAll('.hidden-from-right');
hiddenElementsTop.forEach((el) => observer5.observe(el));

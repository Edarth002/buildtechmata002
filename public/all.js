let menu = document.getElementById("Menu");
let closeMenu = document.getElementById("closeMenu");
let openMenu = document.getElementById("openMenu");

openMenu.addEventListener("click", () => {
    menu.style.display = "flex";
});
closeMenu.addEventListener("click", () => {
    menu.style.display = "none";
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

let animate = document.querySelectorAll(".section");
animate.forEach((el) => observer.observe(el));

const observant = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('showcase');
        } else {
            entry.target.classList.remove('showcase');
        }
    });
});

let animated = document.querySelectorAll(".sect");
animated.forEach((el) => observant.observe(el));




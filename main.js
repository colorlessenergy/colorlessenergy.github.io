var navbar = document.getElementById("responsive-navbar");
var navClick = document.getElementById("nav-click");
var slideshowItems = [
    {"pic": "apps/pacman.png", "desc": "my first game I have ever made", "link": "https://colorlessenergy.github.io/pacman/"},
    {"pic": "apps/scramble-word.png", "desc": "a game where you unscramble a word that is given", "link": "https://colorlessenergy.github.io/scrambled-word/"},
    {"pic": "apps/spelling-with-chemistry.png", "desc": "changes words into chemistry ", "link": "https://colorlessenergy.github.io/spelling-with-chemistry/"}
    ];
navClick.addEventListener("click", function () {
    navbar.classList.toggle("show");
});


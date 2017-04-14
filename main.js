var navbar = document.getElementById("responsive-navbar");
var navClick = document.getElementById("nav-click");
var slideshowItems = [
    {"pic": "apps/pacman.png", "desc": "my first game I have ever made", "link": ""},
    {"pic": "apps/scramble-word.png", "desc": "a game where you unscramble a word that is given", "link": ""},
    {"pic": "apps/spelling-with-chemistry.png", "desc": "changes words into chemistry ", "link": ""}
    ];
navClick.addEventListener("click", function () {
    navbar.classList.toggle("show");
});

var buttons = document.getElementsByClassName("menu-icon");
var responsivenav = document.getElementById("responsivenav");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    document.getElementsByTagName("body")[0].classList.toggle("overflowhidden");
    responsivenav.classList.toggle("toggle-nav");
  })
}

var buttons = document.getElementsByClassName("menu-icon");
var responsivenav = document.getElementById("responsivenav");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    responsivenav.classList.toggle("toggle-nav")
  })
}

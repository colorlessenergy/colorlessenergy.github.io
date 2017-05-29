var buttons = document.getElementsByClassName("menu-icon");
var responsivenav = document.getElementById("responsivenav");
var bgPics = document.getElementsByClassName('bg');

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    document.getElementsByTagName("body")[0].classList.toggle("overflowhidden");
    responsivenav.classList.toggle("toggle-nav");
  })
}

document.addEventListener("scroll", function() {

  if (window.pageYOffset > 250) {
    for (var i = 0; i < bgPics.length; i++) {
      bgPics[i].style.opacity = "1";
    }
  }
});

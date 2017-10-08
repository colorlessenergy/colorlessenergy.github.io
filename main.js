var buttons = document.getElementsByClassName("menu-icon");
var responsivenav = document.getElementById("responsivenav");
var bgPics = document.getElementsByClassName('bg');

function toggleMenu(x) {
  x.classList.toggle("change");
  responsivenav.classList.toggle("toggle-nav");
  responsivenav.classList.toggle("r-c");
}

document.addEventListener("scroll", function() {

  if (window.pageYOffset > 250) {
    for (var i = 0; i < bgPics.length; i++) {
      bgPics[i].style.opacity = "1";
    }
  }
});

const containerMenu = document.querySelector(".container-menu");
const menuShow = document.querySelector(".menu-show");
const down = document.querySelector(".scroll");
const gallery = document.querySelector(".gallery");

if (gallery) {
  const galleryPic = gallery.querySelectorAll(".gallery-wrapper a div");

  down.addEventListener("click", function () {
    let scrollValue = 0;
    let scroll = window.setInterval(function () {
      let prevValue = window.scrollY;
      if (window.scrollY < gallery.offsetTop - 100) {
        window.scrollBy(0, scrollValue);
    } else if (window.scrollY > gallery.offsetTop - 100) {
      scrollValue = 0;
      window.clearInterval(scroll);
    }
    scrollValue++;
    }, 10)
  });

  window.setInterval(function () {
    if (window.scrollY > 378 && !once) {
      console.log("called", window.scrollY);
      galleryPic.forEach(function (current) {
        current.classList.toggle("showPic");
      });
      once = true;
    }
  });
}


  containerMenu.addEventListener("click", function(e) {
    e.currentTarget.classList.toggle("change");
    menuShow.classList.toggle("toggle-nav");
  });

let once = false;

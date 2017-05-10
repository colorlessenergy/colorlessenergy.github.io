var loadWork = document.getElementsByClassName("load");
var displayWork = document.getElementById("work");
var show = document.getElementById("show")
var projName = ["Pacman", "Giant", "Zed", "Water", "Fruits and Vegetables", "dev banana"]

for (var i = 0; i < loadWork.length; i++) {
  loadWork[i].addEventListener("click", function () {
    displayWork.classList.toggle("toggleNav");
  });
}

document.getElementById("slider").defaultValue = 0;

document.getElementById("slider").oninput = function() {
    myFunction();
};


function myFunction() {
   var val = document.getElementById("slider").value;
   show.innerHTML = projName[val]
}

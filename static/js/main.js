// Add active class to the current button (highlight it)
var header = document.getElementById("navbar-list");
var navs = header.getElementsByClassName("li");
for (var i = 0; i < navs.length; i++) {
  navs[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}
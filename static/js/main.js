// Add active class to the current button (highlight it)

// var header = document.getElementById("navbar-list");
// var navs = header.querySelectorAll("nav-link");
// navs.forEach((l) => {
//   l.addEventListener("click", () => {
//     l[0].className = current[0].
//     this.className += " active";
//   })
// })

const navLinks = document.querySelectorAll('.nav-link')
const menuToggle = document.getElementById('navbarDropdown')
const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle:false})
navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() })
})
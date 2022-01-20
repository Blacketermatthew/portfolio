// For closing the collapsed navbar after an option is selected
// const navLinks = document.querySelectorAll('.nav-link')
// const menuToggle = document.getElementById('navbarNavDarkDropdown')
// const bsCollapse = new bootstrap.Collapse(menuToggle)

// navLinks.forEach((l) => {
//     l.addEventListener('click', () => { bsCollapse.toggle() })
// })




const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')
const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle:false})
navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() })
})
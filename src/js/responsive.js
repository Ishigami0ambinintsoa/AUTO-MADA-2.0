const menuHamburger = document.querySelector(".menu_Hamburger")
const navLinks = document.querySelector(".navLinks")

menuHamburger.addEventListener('click',()=>{
navLinks.classList.toggle('mobile-menu')
})
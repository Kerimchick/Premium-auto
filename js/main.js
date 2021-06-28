//function search
let searchIcon = document.querySelector(".link-search svg")
let search = document.querySelector(".search-box")

searchIcon.addEventListener("click", () => {
    search.classList.toggle("search-visible")
})
//show menu-burger
const burgerMenu  = document.querySelector('.mobile-menu')
const topMenu = document.querySelector('.menu')

burgerMenu.addEventListener('click', () => {
    topMenu.classList.toggle('show')
})

//hide menu-burger
const menuLinks = document.querySelectorAll('.menu a')
menuLinks.forEach(item => item.addEventListener('click', () => {
    topMenu.classList.remove('show')
} ))
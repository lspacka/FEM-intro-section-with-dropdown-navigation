const burger = document.querySelector('.burger-img')
const menus = document.querySelector('.menu-container')
const close_menu = document.querySelector('.close-menu')
const register = document.querySelector('.register-link')
const overlay = document.querySelector('.overlay')
const close_modal = [register, close_menu]

burger.addEventListener('click', () => {
    menus.classList.add('active')
    overlay.style.display = 'block'
    // burger.style.display = 'none'
})

close_modal.forEach(el => {
    el.addEventListener('click', () => {
        menus.classList.remove('active')
        overlay.style.display = 'none'
    })
})

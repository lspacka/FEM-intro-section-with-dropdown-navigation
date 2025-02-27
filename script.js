const burger = document.querySelector('.burger-img')
const menus = document.querySelector('.menu-container')
const dropdowns = document.querySelectorAll('.dropdown')
const close_menu = document.querySelector('.close-menu')
const login = document.querySelector('.login-link')
const register = document.querySelector('.register-link')
const overlay = document.querySelector('.overlay')
const media_query = window.matchMedia('(min-width: 1200px)')
const close_modal = [login, register, close_menu]

function handleViewportChange(event) {
    if (event.matches) {
        menus.classList.remove('active')
        overlay.style.display = 'none'
    }
}

media_query.addEventListener('change', handleViewportChange)
handleViewportChange(media_query)

burger.addEventListener('click', () => {
    menus.classList.add('active')
    overlay.style.display = 'block'
})

close_modal.forEach(el => {
    el.addEventListener('click', () => {
        menus.classList.remove('active')
        overlay.style.display = 'none'
    })
})

// dropdown menus

dropdowns.forEach(item => {
    let active = false
    let menu = document.getElementById(item.classList[2])

    item.addEventListener('click', () => {
        let arrow_img = item.querySelector('.arrow')
        active = !active

        if (active) {
            arrow_img.src = 'images/icon-arrow-up.svg'
            menu.style.display = 'flex'
        } else {
            arrow_img.src = 'images/icon-arrow-down.svg'
            menu.style.display = 'none'
        }
    })
})
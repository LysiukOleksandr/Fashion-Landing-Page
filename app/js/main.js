new WOW().init()

window.onload = function () {
  document.body.style.overflow = 'initial'
  document.querySelector('.preloader').style.display = 'none'
}

function menuBurger() {
  let burger = document.querySelector('.header__menu-burger')
  let menu = document.querySelector('.header__list')

  burger.onclick = function () {
    burger.classList.toggle('header__menu-burger--active')
    menu.classList.toggle('header__list--open')
    document.body.classList.toggle('hidden')
  }
}

menuBurger()

document.querySelector('.footer__top-form').onsubmit = function (e) {
  e.preventDefault()
}

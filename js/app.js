new Typed('#side-nav-typer', {
  strings: [
    '',
    'fullstack developer',
    'loyal man',
    'gamer',
    'faithful man',
    'pc repair man',
    'techie person'
  ],
  loop: true,
  typeSpeed: 70,
  backSpeed: 50,
  smartBackspace: true
})





const navToggler = document.querySelector('.nav-toggler')
const sideNav = document.querySelector('.side-nav')
const modalBG = document.querySelector('.modal-bg')
const close = document.querySelector('.close')


// side-nav toggler
navToggler.addEventListener('click', function () {
  sideNav.classList.add('active')
  modalBG.classList.add('active')
})

close.addEventListener('click', function(){
    this.classList.remove('active')
    sideNav.classList.remove('active')
})

// modal background
modalBG.addEventListener('click', function () {
  this.classList.remove('active')
  sideNav.classList.remove('active')
})

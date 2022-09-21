const nav = document.querySelector('nav')
const toggleBtn = document.querySelector('.toggle')
const container = document.querySelector('.side-nav')
const anchors = container.querySelectorAll('a')
const header = document.querySelector('header')
const span = document.querySelectorAll('span')
const emailForm = document.querySelector('#email-form')

//change color on  scroll
window.onscroll = () => {
    if (window.scrollY > 7) {
        nav.classList.add('nav-active');
        header.classList.add('title-active');
        span.forEach(toggleBtn =>{toggleBtn.classList.add('span-active')})
        for (const a of document.querySelectorAll('a')) {a.style.color = '#FCF8E8'}
        for (const a of document.querySelectorAll('.side-nav-items')) {a.style.color = '#94B49F'}
    
    } else {
        nav.classList.remove('nav-active')
        header.classList.remove('title-active')
        span.forEach(toggleBtn =>{toggleBtn.classList.remove('span-active')})
        for (const a of document.querySelectorAll('a')) {a.style.color = '#94B49F'}
    
      }

}

//toggle = the cross or spans
//when clicked


toggleBtn.addEventListener('click', function () {
    toggleBtn.classList.toggle('active')
    document.querySelector('.side-nav').classList.toggle('active')
})


//close the side-nav when anchors clicked
for (const anchor of anchors) {
  anchor.addEventListener('click', () => {
    container.classList.remove('active')
    toggleBtn.classList.remove('active')
  })
}


// To remove confirm resubmition
if ( window.history.replaceState ) {
  window.history.replaceState( null, null, window.location.href );
}

emailjs.init("57KNmk21agGBbv-j1")

emailForm.addEventListener('submit', e => {
  e.preventDefault()

  const email = emailForm.email.value.trim()
  const message = emailForm.message.value.trim()

  if (!email || !message) return alert('missing input')

  const payload = { from_name: email, to_name: 'Carl', message }

  emailjs
      .send('service_83wdyuk', 'template_scf4t89', payload)
      .then(() => alert('Send successfully'))
      .catch(console.error)

  emailForm.email.value = ''
  emailForm.message.value = ''
})
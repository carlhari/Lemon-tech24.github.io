const toggleBtn = document.querySelector('.toggle');

toggleBtn.addEventListener('click', function () {
    toggleBtn.classList.toggle('active')
    document.querySelector('.side-nav').classList.toggle('active')
})
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarlinks = document.getElementsByClassName('navbar-links')[0]


toggleButton.addEventListener('click', function(){
    navbarlinks.classList.toggle('active')
})

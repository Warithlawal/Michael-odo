const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-open'),
navClose = document.getElementById('nav-close')

if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
};

if(navClose) {
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
};

const navLink = document.querySelectorAll('.nav-item')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


//---------------------------------------

/*let sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}*/

const accordion = document.getElementsByClassName('card-details');

for (i = 0; i < accordion.length; i++) {

    accordion[i].addEventListener('click', function () {
        this.classList.toggle('active');
    })
}
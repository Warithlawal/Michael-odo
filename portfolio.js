const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-open'),
      navClose = document.getElementById('nav-close'),
      contactButton = document.querySelector('.contact-me-button'); // Select the contact button

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
};

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
};

const navLink = document.querySelectorAll('.nav-item')

const linkAction = () => {
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// Add event listener to the contact button
if (contactButton) {
    contactButton.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
};

if (contactButton) {
    contactButton.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
};





document.addEventListener('DOMContentLoaded', () => {
    const accordionItems = document.querySelectorAll('.card-details-1, .card-details-2, .card-details-3');

    accordionItems.forEach(item => {
        item.addEventListener('click', function () {
            // Remove 'active' class from all items
            accordionItems.forEach(i => {
                if (i !== item) {
                    const links = i.querySelectorAll('.product-link a');
                    links.forEach(link => link.classList.remove('active'));
                }
            });

            // Toggle 'active' class on the clicked element's product links
            const links = this.querySelectorAll('.product-link a');
            links.forEach(link => link.classList.toggle('active'));
        });
    });
});





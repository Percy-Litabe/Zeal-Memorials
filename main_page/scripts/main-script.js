function showMenu() {
    const menu = document.querySelector('.resp-menu-list');
    menu.style.visibility = 'visible';
    setTimeout(() => {
        menu.classList.add('active');
    }, 10);
}
function hideMenu() {
    const menu = document.querySelector('.resp-menu-list');
    menu.classList.remove('active');
    setTimeout(() => {
    menu.style.visibility = 'hidden';        
    }, 500);
}

/*Navbar scroll change*/
const navHead = document.querySelector('nav');
document.addEventListener('scroll', () => {

    if (window.scrollY > 5) {
        navHead.classList.add('scrolled');
    } else {
        navHead.classList.remove('scrolled');
    }
});
/*End navbar scroll change*/

/*Frequently asked questions dropdown.*/
const questions = document.querySelectorAll('.faq-question');

questions.forEach (question => {
    question.addEventListener ('click', () => {

        const answer = question.nextElementSibling;
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {
            const answrs = document.querySelectorAll('.faq-answer');
            answrs.forEach(answer => answer.style.display = 'none');
            answer.style.display = 'block';
        }
    })
});
/*End frequently asked questions dropdown.*/

/*Package cards animation.*/
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.pckg-card'); // Select all pckg-card elements

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Make card visible when in view

                // Check for card2 and apply the correct animation class
                if (entry.target.id === 'pckg-card') {
                    entry.target.classList.add('visible-right'); // Slide card2 in from the left
                } else {
                    entry.target.classList.add('visible-left'); // Slide other cards in from the right
                } 
            
                observer.unobserve(entry.target); // Stop observing after the card is animated

            } else {
                entry.target.classList.remove ('visible');
                entry.target.classList.remove ('visible-left', 'visible-right');
            }
        });
    }, {
        threshold: 0.1 // Trigger when 50% of the card is in view
    });

    cards.forEach(card => {
        observer.observe(card); // Observe each card
    });
});
/*End package cards animation.*/

/*Map of locations*/ 
function initMap() {
    var location = {lat: -29.180871113402553, lng: 26.234041717607727};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: location
    });

    var marker = new google.maps.Marker({
        postition: location,
        map: map,
        title: 'Funeral Location'
    });
}
/*End map of loactions*/
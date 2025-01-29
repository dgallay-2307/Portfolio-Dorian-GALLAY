const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger')

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - navbarHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});

let currentIndex = 0;

function moveCarousel(direction) {
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    currentIndex = (currentIndex + direction + totalItems) % totalItems;
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

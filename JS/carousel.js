let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');

    slides.forEach((slide, index) => {
        slide.style.display = index === slideIndex ? 'block' : 'none';
    });

    dots.forEach((dot, index) => {
        dot.className = dot.className.replace(" active", "");
        if (index === slideIndex) {
            dot.className += " active";
        }
    });

    slideIndex = (slideIndex + 1) % slides.length;
    setTimeout(showSlides, 4000); 
}

function currentSlide(n) {
    slideIndex = n - 1;
    showSlides();
}

// For Active Link/Page
window.onload = function() {
    const currentPage = window.location.pathname;

    if (currentPage.includes('project.html') || currentPage === '/') {
        document.getElementById('home-link').classList.add('active-link');
    } else if (currentPage.includes('Products.html')) {
        document.getElementById('products-link').classList.add('active-link');
    } else if (currentPage.includes('about-us.html')) {
        document.getElementById('about-link').classList.add('active-link');
    } else if (currentPage.includes('store-locator.html')) {
        document.getElementById('store-link').classList.add('active-link');
    } else if (currentPage.includes('contact-us.html')) {
        document.getElementById('contact-link').classList.add('active-link');
    }
};

// For Dropdown Menu
document.getElementById('dropdown-icon').onclick = function() {
    const menu = document.getElementById('menu-right');
    menu.classList.toggle('show'); 
};


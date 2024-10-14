document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); 
        let valid = true;

        document.querySelectorAll('.error').forEach(error => error.textContent = '');

        // Validate Full Name
        const fullname = document.getElementById('fullname').value;
        if (fullname.trim() === "") {
            document.getElementById('name-error').textContent = 'Full name is required.';
            valid = false;
        } else if (isOnlyDigits(fullname)) {
            document.getElementById('name-error').textContent = 'Full name must contain only words.';
            valid = false;
        }

        // Validate Email
        const email = document.getElementById('email').value;
        if (email.trim() === "") {
            document.getElementById('email-error').textContent = 'Email is required.';
            valid = false;
        } else if (!email.includes("@") || !email.includes(".")) {
            document.getElementById('email-error').textContent = 'Please enter a valid email.';
            valid = false;
        }

        // Validate Phone Number
        const phone = document.getElementById('phone').value;
        if (phone.trim() === "") {
            document.getElementById('phone-error').textContent = 'Phone number is required.';
            valid = false;
        } else if (!isOnlyDigits(phone)) {
            document.getElementById('phone-error').textContent = 'Phone number must contain only numbers.';
            valid = false;
        }

        // Validate Gender
        const gender = document.getElementById('gender').value;
        if (gender === "") {
            document.getElementById('gender-error').textContent = 'Please select your gender.';
            valid = false;
        }

        // Validate Checkbox
        const newsletterChecked = document.getElementById('newsletter').checked;
        if (!newsletterChecked) {
            document.getElementById('newsletter-error').textContent = 'You must agree to receive the latest news, exclusive offers and new product releases';
            valid = false;
        }

        if (valid) {
            document.getElementById('form-success').textContent = 'Thank you for contacting SaffCoZ! We will get back to you soon.';
            form.reset(); 
        }
    });

    function isOnlyDigits(value) {
        for (let i = 0; i < value.length; i++) {
            if (value[i] < '0' || value[i] > '9') {
                return false; 
            }
        }
        return true; 
    }
});


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
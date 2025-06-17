const pages = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('.nav-button');

function hideAllPages() {
    pages.forEach(page => page.classList.remove('active'));
}

function deactivateAllLinks() {
    navLinks.forEach(link => link.classList.remove('active'));
}


// Modify the event listener for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        const pageId = this.dataset.page;

        if (pageId) {
            // If it's a page link, handle as before
            hideAllPages();
            deactivateAllLinks();
            document.getElementById(pageId).classList.add('active');
            this.classList.add('active');
        } else {
            // If it's an anchor link, scroll to the anchor
            const targetId = this.getAttribute('href'); // Get the href value (#register-section)
            const targetElement = document.querySelector(targetId); // Find the element with that ID

            if (targetElement) {
                targetElement.scrollIntoView({ // Scroll to the element
                    behavior: 'smooth' // Add smooth scrolling
                });
            }
        }
    });
});

// Start Test Button
document.querySelector('.start-test').addEventListener('click', function (e) {
    e.preventDefault();
    window.open('test.html', '_blank', 'width=800,height=600');
});

// Handle Registration Form Submission (Placeholder)
document.getElementById('registration-form').addEventListener('submit', function (e) {
    e.preventDefault();
    // In a real application, you would send this data to a server-side script for processing
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // For now, just display a message
    alert(`Регистрация выполнена!\nИмя: ${name}\nEmail: ${name}`);

    // Optionally, redirect to another page or clear the form
});
// JavaScript for Carousel
const carouselTrack = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-slide');
const prevButtonCarousel = document.querySelector('.carousel-control.prev');
const nextButtonCarousel = document.querySelector('.carousel-control.next');
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const closeBtn = document.querySelector('.close');
const carouselTitle = document.getElementById('carousel-title');
const carouselDescription = document.getElementById('carousel-description');

let slideIndex = 0;
const slideData = [
    {
        title: "Актуальные вопросы",
        description: "Наши тесты содержат самые актуальные вопросы, которые могут встретиться на экзамене в ГИБДД."
    },
    {
        title: "Режим экзамена",
        description: "Проверьте свои знания в условиях, максимально приближенных к реальному экзамену."
    },
    {
        title: "Подробная статистика",
        description: "Отслеживайте свой прогресс и улучшайте знания в слабых темах."
    }
];

// Function to update carousel content
function updateCarouselContent() {
    carouselTitle.textContent = slideData[slideIndex].title;
    carouselDescription.textContent = slideData[slideIndex].description;
}

function showSlide(index) {
    slides.forEach(slide => slide.style.display = 'none');
    slides[index].style.display = 'block';
}

// Function to update carousel position
function updateCarousel() {
    showSlide(slideIndex);
    updateCarouselContent();
}

// Next button functionality
nextButtonCarousel.addEventListener('click', () => {
    slideIndex = (slideIndex + 1) % slides.length;
    updateCarousel();
});

// Previous button functionality
prevButtonCarousel.addEventListener('click', () => {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    updateCarousel();
});

// Function to open modal
function openModal() {
    modal.style.display = "block";
}

// Add zoom functionality to each slide
slides.forEach((slide, index) => {
        const zoomIcon = slide.querySelector('.zoom-icon');
        zoomIcon.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent click from propagating to the image
            modalImg.src = slide.querySelector('img').src;
            openModal();
        });

        slide.querySelector('img').addEventListener('click', () => {
            modalImg.src = slide.querySelector('img').src;
            openModal();
        });
    }
);

// Close modal functionality
closeBtn.addEventListener('click', () => {
    modal.style.display = "none";
});

window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

updateCarouselContent();
showSlide(0);

const themeToggle = document.getElementById('theme-toggle');
const accessibilityToggle = document.getElementById('accessibility-toggle');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

accessibilityToggle.addEventListener('click', () => {
    document.body.classList.toggle('high-contrast');
});
// Registration Form Submission (Simulated)
document.getElementById('registration-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simulate a successful registration
    alert(`Регистрация выполнена!\nИмя: ${name}\nEmail: ${email}`);

    // Store account information in localStorage
    localStorage.setItem('accountName', name);
    localStorage.setItem('accountEmail', email);

    // Update account info display
    document.getElementById('account-name').textContent = name;
    document.getElementById('account-email').textContent = email;

    // Add a class to the body to hide the registration section and show the account info
    document.body.classList.add('registered');

    // Show logout button in nav
    document.getElementById('logout-nav-item').style.display = 'list-item';

});

//Login form submission
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Retrieve stored account information (if any)
    const storedName = localStorage.getItem('accountName');
    const storedEmail = localStorage.getItem('accountEmail');

    // Simulate login based on stored data
    if (storedEmail === email) { //Basic check if email matches (simplified)
        alert(`Вход выполнен!\nEmail: ${email}`);

        // Update account info display
        document.getElementById('account-name').textContent = storedName;
        document.getElementById('account-email').textContent = storedEmail;

        // Add a class to the body to hide the registration section and show the account info
        document.body.classList.add('registered');

        // Show logout button in nav
        document.getElementById('logout-nav-item').style.display = 'list-item';

    } else {
        alert('Неверный email или пароль. Пожалуйста, попробуйте еще раз.');
    }

});
// Check if user is already registered on page load
window.addEventListener('load', function() {
    if (localStorage.getItem('accountName')) {
        document.body.classList.add('registered');
        document.getElementById('account-name').textContent = localStorage.getItem('accountName');
        document.getElementById('account-email').textContent = localStorage.getItem('accountEmail');
        //Show logout button in nav on page load
        document.getElementById('logout-nav-item').style.display = 'list-item';
    }
});

// Logout Button (in account info section)
document.getElementById('logout-btn').addEventListener('click', function () {
    localStorage.removeItem('accountName');
    localStorage.removeItem('accountEmail');
    document.body.classList.remove('registered');
    document.getElementById('logout-nav-item').style.display = 'none'; //Hide logout button in nav

    // Reload the page to reset the view
    window.location.reload();
});
// Logout Button (in nav)
document.getElementById('logout-nav-btn').addEventListener('click', function () {
    localStorage.removeItem('accountName');
    localStorage.removeItem('accountEmail');
    document.body.classList.remove('registered');
    document.getElementById('logout-nav-item').style.display = 'none';//Hide logout button in nav

    // Reload the page to reset the view
    window.location.reload();
});
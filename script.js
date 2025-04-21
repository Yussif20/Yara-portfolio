function toggleDetails(id, button) {
    const element = document.getElementById(id);
    const allDetails = document.querySelectorAll('.project-details');
    
    allDetails.forEach(detail => {
        if (detail.id !== id) {
            detail.style.display = 'none';
            const otherButton = detail.parentElement.querySelector('button');
            if (otherButton) otherButton.textContent = 'Show Details';
        }
    });

    if (element.style.display === 'block') {
        element.style.display = 'none';
        button.textContent = 'Show Details';
    } else {
        element.style.display = 'block';
        button.textContent = 'Hide Details';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const popup = document.getElementById('popup');
            const popupMessage = document.getElementById('popup-message');
            
            if (!emailPattern.test(email)) {
                popupMessage.textContent = 'Please enter a valid email address.';
                popup.style.display = 'flex';
                return;
            }
            
            popupMessage.textContent = 'Message sent successfully!';
            popup.style.display = 'flex';
            this.reset();
        });
    }

    // Subscribe form submission
    const subscribeForm = document.getElementById('subscribe-form');
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('subscribe-email').value;
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const popup = document.getElementById('popup');
            const popupMessage = document.getElementById('popup-message');
            
            if (!emailPattern.test(email)) {
                popupMessage.textContent = 'Please enter a valid email address.';
                popup.style.display = 'flex';
                return;
            }
            
            popupMessage.textContent = 'Subscribed successfully!';
            popup.style.display = 'flex';
            this.reset();
        });
    }

    // Popup close
    const popup = document.getElementById('popup');
    if (popup) {
        document.getElementById('popup-close').addEventListener('click', function() {
            popup.style.display = 'none';
        });

        popup.addEventListener('click', function(e) {
            if (e.target === this) {
                this.style.display = 'none';
            }
        });
    }

    // Menu toggle
    document.querySelectorAll('.menu-toggle').forEach(toggle => {
        toggle.addEventListener('click', function() {
            this.classList.toggle('active');
            const navList = this.parentElement.querySelector('.nav-list');
            navList.classList.toggle('active');
        });
    });
});
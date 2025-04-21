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

document.getElementById('contact-form').addEventListener('submit', function(e) {
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

document.getElementById('popup-close').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});

document.getElementById('popup').addEventListener('click', function(e) {
    if (e.target === this) {
        this.style.display = 'none';
    }
});

document.querySelectorAll('.menu-toggle').forEach(toggle => {
    toggle.addEventListener('click', function() {
        this.classList.toggle('active');
        const navList = this.parentElement.querySelector('.nav-list');
        navList.classList.toggle('active');
    });
});
// Form Validation
function validateForm() {
    const form = document.getElementById('registration-form');
    const name = form.querySelector('input[name="name"]');
    const email = form.querySelector('input[name="email"]');
    const phone = form.querySelector('input[name="phone"]');
    const experience = form.querySelector('select[name="experience"]');
    
    if (name.value.trim() === '') {
        alert('Full Name is required');
        return false;
    }
    
    if (email.value.trim() === '') {
        alert('Email is required');
        return false;
    }
    
    if (!validateEmail(email.value)) {
        alert('Please enter a valid email address');
        return false;
    }
    
    if (phone.value.trim() === '') {
        alert('Phone Number is required');
        return false;
    }
    
    if (experience.value.trim() === '') {
        alert('Experience Level is required');
        return false;
    }
    
    return true;
}

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}

document.getElementById('registration-form').addEventListener('submit', function(e) {
    if (!validateForm()) {
        e.preventDefault();
    } else {
        e.preventDefault();
        alert('Form submitted successfully!');
        this.reset();
    }
});

// Form Animation
const formGroups = document.querySelectorAll('.form-group input, .form-group select');

formGroups.forEach(element => {
    element.addEventListener('focus', () => {
        element.parentElement.classList.add('focused');
    });

    element.addEventListener('blur', () => {
        if (element.value.trim() === '') {
            element.parentElement.classList.remove('focused');
        }
    });
});
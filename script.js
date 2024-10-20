const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

// Toggle between forms
loginBtn.addEventListener('click', () => {
    loginForm.classList.add('active');
    signupForm.classList.remove('active');
    loginBtn.classList.add('active');
    signupBtn.classList.remove('active');
});

signupBtn.addEventListener('click', () => {
    signupForm.classList.add('active');
    loginForm.classList.remove('active');
    signupBtn.classList.add('active');
    loginBtn.classList.remove('active');
});

// Toggle password visibility
function togglePassword(element) {
    const input = element.previousElementSibling;
    if (input.type === "password") {
        input.type = "text";
        element.textContent = "🙈"; // Change icon to closed eye
    } else {
        input.type = "password";
        element.textContent = "👁️"; // Change icon to open eye
    }
}
// Toggle password visibility
function togglePassword(element) {
    const input = element.closest('.password-box').querySelector('input'); // Find the input in the same password box
    if (input.type === "password") {
        input.type = "text";
        element.textContent = "🙈"; // Change icon to closed eye
    } else {
        input.type = "password";
        element.textContent = "👁️"; // Change icon to open eye
    }
}

// Form validation feedback
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(event) {
        const inputs = this.querySelectorAll('input');
        let isValid = true;
        inputs.forEach(input => {
            const errorMessage = input.nextElementSibling.nextElementSibling;
            if (!input.value) {
                errorMessage.style.display = 'block';
                isValid = false;
            } else {
                errorMessage.style.display = 'none';
            }
        });

        if (!isValid) {
            event.preventDefault(); // Prevent form submission if validation fails
        }
    });
});

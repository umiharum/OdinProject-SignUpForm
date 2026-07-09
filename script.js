const form = document.getElementById('signup-form');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');

form.addEventListener('submit', function(e) {
    if (passwordInput.value !== confirmPasswordInput.value) {
        e.preventDefault();
        passwordInput.classList.add('error');
        confirmPasswordInput.classList.add('error');
        alert('Passwords do not match. Please try again.');
    }
});
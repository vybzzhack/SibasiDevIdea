document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const submitBtn = document.getElementById('submitBtn');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    
    // Validate email format
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    // Validate password length
    function isValidPassword(password) {
        return password.length >= 8;
    }
    
    // Update submit button state
    function updateSubmitButton() {
        const emailValid = isValidEmail(emailInput.value);
        const passwordValid = isValidPassword(passwordInput.value);
        
        submitBtn.disabled = !(emailValid && passwordValid);
    }
    
    // Validate form on input
    function validateForm() {
        // Validate email
        if (!isValidEmail(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email address';
        } else {
            emailError.textContent = '';
        }
        
        // Validate password
        if (!isValidPassword(passwordInput.value)) {
            passwordError.textContent = 'Password must be at least 8 characters';
        } else {
            passwordError.textContent = '';
        }
        
        updateSubmitButton();
    }
    
    // Event listeners
    emailInput.addEventListener('input', validateForm);
    passwordInput.addEventListener('input', validateForm);
    
    // Form submission
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // If we got here, validation passed
        window.location.href = 'dashboard.html';
    });
});
const email = document.querySelector('#email')
const country = document.querySelector('#country')
const zip = document.querySelector('#zip')
const password = document.querySelector('#password')
const confirmPassword = document.querySelector('#confirmPass')
const form = document.querySelector('form')
const emailError = document.querySelector('#email + span.error')
const countryError = document.querySelector('#country + span.error')
const zipError = document.querySelector('#zip + span.error')
const passwordError = document.querySelector('#password + span.error')
const confirmPasswordError = document.querySelector('#confirmPass + span.error')

form.addEventListener('submit', (event) => {
    event.preventDefault();
    validateForm();
});

function showError(input, errorElement, errorMessage, event) {
    const hasError = input.validity.valueMissing || input.validity.typeMismatch;
    errorElement.classList.toggle('active', hasError);
    errorElement.textContent = hasError ? errorMessage : '';
  
    // Highlight the border based on validity
    input.classList.toggle('invalid', hasError);
    input.classList.toggle('valid', !hasError);
  }

function validateForm() {
    showError(email, emailError, 'You need to enter an email.');
    showError(country, countryError, 'You need to enter your country.');
    showError(zip, zipError, 'You need to enter your zip.');
    showError(password, passwordError, 'You need to enter a password.');
    showError(confirmPassword, confirmPasswordError, 'Please confirm your password.');

    if (password.value !== confirmPassword.value) {
        passwordError.classList.add('active');
        passwordError.textContent = 'Passwords do not match.';
    } else {
        passwordError.textContent = '';
        passwordError.classList.remove('active');
    }

    if (form.checkValidity()) {
        alert('Thank you for signing up!');
    }
}
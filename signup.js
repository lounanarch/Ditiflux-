// Get the sign-up form elements
const signUpForm = document.querySelector('form');
const fullNameInput = document.querySelector('input[type="text"]');
const emailInput = document.querySelector('input[type="email"]');
const phoneNumberInput = document.querySelector('input[type="tel"]');
const passwordInput = document.querySelector('input[type="password"]');
const reEnterPasswordInput = document.querySelector('input[type="password"]:last-of-type');
const termsCheckbox = document.querySelector('input[type="checkbox"]');
const signUpButton = document.querySelector('button[type="submit"]');

// Add event listeners to the form elements
signUpForm.addEventListener('submit', (e) => {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Validate the form inputs
  if (fullNameInput.value.trim() === '') {
    alert('Please enter your full name');
    return;
  }
  if (emailInput.value.trim() === '') {
    alert('Please enter your email address');
    return;
  }

  if (phoneNumberInput.value.trim() === '') {
    alert('Please enter your phone number');
    return;
  }

  if (passwordInput.value.trim() === '') {
    alert('Please enter a password');
    return;
  }

  if (reEnterPasswordInput.value.trim() === '') {
    alert('Please re-enter your password');
    return;
  }

  if (passwordInput.value !== reEnterPasswordInput.value) {
    alert('Passwords do not match');
    return;
  }

  if (!termsCheckbox.checked) {
    alert('Please agree to the terms and conditions');
    return;
  }

  // Submit the form data to the server
  // Replace this with your own server-side logic
  alert('Sign-up successful!');
});

// Add event listeners to the sign-up button
signUpButton.addEventListener('click', () => {
  // Toggle the active class on the sign-up button
  signUpButton.classList.toggle('active');
});

// Add event listeners to the terms and conditions checkbox
termsCheckbox.addEventListener('change', () => {
  // Toggle the disabled state of the sign-up button
  signUpButton.disabled = !termsCheckbox.checked;
});

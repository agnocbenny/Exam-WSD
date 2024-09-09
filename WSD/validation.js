document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.querySelector('#signup-form');
    const emailInput = document.querySelector('#email');
    const passwordInput = document.querySelector('#password');
    const emailError = document.querySelector('#email-error');
    const passwordError = document.querySelector('#password-error');
    const newsSection = document.querySelector('#news-section');
    const signupSection = document.querySelector('#signup-section');
  
    // Validate the form
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;
  
      // Email validation
      const emailValue = emailInput.value.trim();
      if (!emailValue || !/\S+@\S+\.\S+/.test(emailValue)) {
        emailError.textContent = 'Please enter a valid email.';
        valid = false;
      } else {
        emailError.textContent = '';
      }
  
      // Password validation
      const passwordValue = passwordInput.value.trim();
      if (!passwordValue || passwordValue.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long.';
        valid = false;
      } else {
        passwordError.textContent = '';
      }
  
      // If valid, show the news section
      if (valid) {
        signupSection.style.display = 'none';
        newsSection.style.display = 'block';
      }
    });
  });
  
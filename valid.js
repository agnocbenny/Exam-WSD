document.getElementById('registrationForm').addEventListener('submit', function (event) {
    let isValid = true;

    // Full Name Validation
    const fullName = document.getElementById('fullName').value;
    const nameValid = /^[A-Za-z\s]{3,}$/.test(fullName);
    document.getElementById('nameValid').style.display = nameValid ? 'inline' : 'none';
    document.getElementById('nameInvalid').style.display = nameValid ? 'none' : 'inline';
    if (!nameValid) isValid = false;

    // Email Validation
    const email = document.getElementById('email').value;
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    document.getElementById('emailValid').style.display = emailValid ? 'inline' : 'none';
    document.getElementById('emailInvalid').style.display = emailValid ? 'none' : 'inline';
    if (!emailValid) isValid = false;

    // Password Validation
    const password = document.getElementById('password').value;
    const passwordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
    document.getElementById('passwordValid').style.display = passwordValid ? 'inline' : 'none';
    document.getElementById('passwordInvalid').style.display = passwordValid ? 'none' : 'inline';
    if (!passwordValid) isValid = false;

    // Confirm Password Validation
    const confirmPassword = document.getElementById('confirmPassword').value;
    const passwordsMatch = password === confirmPassword;
    document.getElementById('confirmPasswordValid').style.display = passwordsMatch ? 'inline' : 'none';
    document.getElementById('confirmPasswordInvalid').style.display = passwordsMatch ? 'none' : 'inline';
    if (!passwordsMatch) isValid = false;

    // Date of Birth Validation
    const dob = document.getElementById('dob').value;
    const dobDate = new Date(dob);
    const age = (new Date().getFullYear()) - dobDate.getFullYear();
    const dobValid = age >= 18;
    document.getElementById('dobValid').style.display = dobValid ? 'inline' : 'none';
    document.getElementById('dobInvalid').style.display = dobValid ? 'none' : 'inline';
    if (!dobValid) isValid = false;

    if (!isValid) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});

// Real-time validation for Full Name
document.getElementById('fullName').addEventListener('input', function () {
    const fullName = document.getElementById('fullName').value;
    const nameValid = /^[A-Za-z\s]{3,}$/.test(fullName);
    document.getElementById('nameValid').style.display = nameValid ? 'inline' : 'none';
    document.getElementById('nameInvalid').style.display = nameValid ? 'none' : 'inline';
});

// Real-time validation for Email
document.getElementById('email').addEventListener('input', function () {
    const email = document.getElementById('email').value;
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    document.getElementById('emailValid').style.display = emailValid ? 'inline' : 'none';
    document.getElementById('emailInvalid').style.display = emailValid ? 'none' : 'inline';
});

// Real-time validation for Password
document.getElementById('password').addEventListener('input', function () {
    const password = document.getElementById('password').value;
    const passwordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
    document.getElementById('passwordValid').style.display = passwordValid ? 'inline' : 'none';
    document.getElementById('passwordInvalid').style.display = passwordValid ? 'none' : 'inline';

    const confirmPassword = document.getElementById('confirmPassword').value;
    const passwordsMatch = password === confirmPassword;
    document.getElementById('confirmPasswordValid').style.display = passwordsMatch ? 'inline' : 'none';
    document.getElementById('confirmPasswordInvalid').style.display = passwordsMatch ? 'none' : 'inline';
});

// Real-time validation for Confirm Password
document.getElementById('confirmPassword').addEventListener('input', function () {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const passwordsMatch = password === confirmPassword;
    document.getElementById('confirmPasswordValid').style.display = passwordsMatch ? 'inline' : 'none';
    document.getElementById('confirmPasswordInvalid').style.display = passwordsMatch ? 'none' : 'inline';
});

// document.getElementById('loginForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent form submission

//     // Get the input values
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;

//     // Perform validation or send data to the server (you'll need server-side processing for this)

//     // Example: Display an alert for demonstration purposes
//     alert(`Username: ${username}, Password: ${password}`);
// });
// Hide the sign-up form initially
// const signUpForm = document.getElementById('signUpForm');
// signUpForm.style.display = 'none';

// // Show the sign-up form when the "No Account? Sign Up Below" link is clicked
// document.getElementById('signUpLink').addEventListener('click', function(event) {
//     event.preventDefault();
//     signUpForm.style.display = 'block';
// });

// // Hide the sign-up form when the login form is submitted
// document.getElementById('loginForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     signUpForm.style.display = 'none';
// });

// // Add a placeholder functionality for "Forgot Password"
// document.getElementById('forgotPassword').addEventListener('click', function(event) {
//     event.preventDefault();

//     // Display an alert or navigate to a new page for password reset (you'll need server-side processing for this)
//     alert('Please enter your email address to reset your password.');
// });
// Hide the sign-up form initially
const signUpForm = document.getElementById('signUpForm');
signUpForm.style.display = 'none';

// Show the sign-up form when the "No Account? Sign Up Below" link is clicked
document.getElementById('signUpLink').addEventListener('click', function(event) {
    event.preventDefault();
    const signUpPage = 'sign-up.html'; // Assuming your sign-up page is named 'sign-up.html'
    window.location.href = signUpPage;
});

// Hide the sign-up form when the login form is submitted
document.getElementById('loginForm').addEventListener('click', function(event) {
    event.preventDefault();
    const signUpPage = 'none'; // Assuming your sign-up page is named 'sign-up.html'
    window.location.href = signUpPage;
    
});


// Add a placeholder functionality for "Forgot Password"
document.getElementById('forgotPassword').addEventListener('click', function(event) {
    event.preventDefault();

    // Display an alert or navigate to a new page for password reset (you'll need server-side processing for this)
    alert('Please enter your email address to reset your password.');
});


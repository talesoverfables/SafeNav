document.getElementById('passwordRecoveryForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Validate email
    const emailInput = document.getElementById('email');
    const email = emailInput.value.trim();

    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Send email with password reset instructions (you'll need server-side processing for this)
    sendPasswordResetEmail(email);

    // Close the password recovery form
    const recoveryForm = document.getElementById('passwordRecoveryForm');
    recoveryForm.style.display = 'none';
});

function isValidEmail(email) {
    // Basic email validation using a regular expression
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return emailRegex.test(email);
}

function sendPasswordResetEmail(email) {
    // This function will send an email with password reset instructions to the provided email address.
    // You'll need to implement the server-side logic to handle the email sending process.
    console.log('Sending password reset email to:', email);
}
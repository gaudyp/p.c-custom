// Show thank you message after form submission
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('thanks-message').style.display = 'block';
    // Optionally, reset the form after submission
    e.target.reset();
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        document.getElementById('contactForm').reset();
        document.getElementById('thankYouMessage').style.display = 'block';
    } else {
        alert('Please fill out all fields.');
    }
});

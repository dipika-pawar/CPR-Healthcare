// Open signup form
document.getElementById('signupBtn').addEventListener('click', function() {
    document.getElementById('signupPopup').style.display = 'block';
});

// Close signup form
document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('signupPopup').style.display = 'none';
});

// Handle form submission
document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from refreshing the page

    const signupData = {
        email: document.getElementById('email').value,
        firstname: document.getElementById('firstname').value,
        lastname: document.getElementById('lastname').value,
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
    };

    // Send form data to backend via POST request
    fetch('http://localhost:8080/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(signupData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Signup Successful');
        document.getElementById('signupPopup').style.display = 'none';  // Close the form after successful signup
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Signup Failed');
    });
});
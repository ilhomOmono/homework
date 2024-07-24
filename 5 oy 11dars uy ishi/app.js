
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    login();
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    register();
});

function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.token) {
            alert('Login successful');
            // Hide login form and show registration form
            document.getElementById('loginForm').classList.add('hidden');
            document.querySelector('h2.hidden').classList.remove('hidden');
            document.getElementById('registerForm').classList.remove('hidden');
        } else {
            alert('Login failed');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function register() {
    const name = document.getElementById('name').value;
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;
    const email = document.getElementById('email').value;

    fetch('https://fakestoreapi.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            username: username,
            password: password,
            email: email
        })
    })
    .then(response => response.json())
    .then(data => {
        alert('Registration successful');
        // Proceed to another page or display a success message
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
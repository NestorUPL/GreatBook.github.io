document.addEventListener('DOMContentLoaded', () => {
    const inputCode = document.getElementById('input-code');
    const outputFrame = document.getElementById('output-frame');
    const submitButton = document.getElementById('submit-code');

    submitButton.addEventListener('click', () => {
        const userInput = inputCode.value.trim();

        if (userInput !== '') {
            outputFrame.srcdoc = userInput;
        } else {
            alert('Пожалуйста, введите код.');
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const usernameInput = document.querySelector('input[name="username"]');
        const passwordInput = document.querySelector('input[name="password"]');
        
        if (usernameInput.value.trim() === '' || passwordInput.value.trim() === '') {
            alert('Пожалуйста, заполните все поля.');
            return;
        }
        
        form.submit();
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = usernameInput.value;
        const password = passwordInput.value;

        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');

        if (storedUsername !== null && storedPassword !== null) {
            window.location.href = 'login.html';
        } else {
            errorMessage.classList.remove('hidden');
        }
    });
});
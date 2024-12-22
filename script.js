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

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        if (username === '' || password === '') {
            errorMessage.classList.remove('hidden');
            return;
        }

        window.location.href = 'login.html';
    });
});
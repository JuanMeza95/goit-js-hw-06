const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function (event) {
    
    event.preventDefault();
    
    const emailInput = loginForm.elements.email;
    const passwordInput = loginForm.elements.password;
    const passwordValue = passwordInput.value;
    const emailValue = emailInput.value;

    if (emailValue.trim() === '' || passwordValue.trim() === '') {
        alert('Se debe completar');
    } else {
        const formItems = {
            email: emailValue,
            password: passwordValue,
        };
        console.log(formItems);
        loginForm.reset;
    }
});




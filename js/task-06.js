const validationInput = document.getElementById('validation-input');
const lengthEsperado = parseInt(validationInput.getAttribute('data-length'));

validationInput.addEventListener('blur', () => {
    const inputLength = validationInput.value.length;
    if (inputLength === lengthEsperado) {
        validationInput.classList.remove('invalid');
        validationInput.classList.add('valid');
    } else {
        validationInput.classList.remove('valid');
        validationInput.classList.add('invalid')
    }
});
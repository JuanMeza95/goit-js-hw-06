const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', () => {
    const name = nameInput.value;
    if (name.trim() === '') {
        nameOutput.textContent = 'Anónimo';
    } else {
        nameOutput.textContent = name;
    }
    });
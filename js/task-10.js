function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function createBoxes(amount) {
      const boxesContainer = document.getElementById('boxes');
      boxesContainer.innerHTML = ''; 
      
      let size = 30;
      for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = getRandomHexColor();
        boxesContainer.appendChild(box);
        size += 10;
      }
    }

    function destroyBoxes() {
      const boxesContainer = document.getElementById('boxes');
      boxesContainer.innerHTML = '';
    }

    const createButton = document.querySelector('[data-create]');
    const destroyButton = document.querySelector('[data-destroy]');
    const inputAmount = document.getElementById('inputAmount');

    createButton.addEventListener('click', () => {
      const amount = parseInt(inputAmount.value, 10);
      if (!isNaN(amount) && amount >= 1 && amount <= 100) {
        createBoxes(amount);
      } else {
        alert('Por favor, ingresa un número válido entre 1 y 100.');
      }
    });

    destroyButton.addEventListener('click', () => {
      destroyBoxes();
    });
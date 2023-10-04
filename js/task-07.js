const lineFont = document.getElementById('font-size-control');
const spanText = document.getElementById('text');

lineFont.addEventListener('input', () => {
    const fontSize = lineFont.value;
    spanText.style.fontSize = `${fontSize}px`;
});
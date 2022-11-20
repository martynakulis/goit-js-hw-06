const formText = document.querySelector('input#name-input');
const outputText = document.querySelector('span#name-output');

formText.addEventListener('input', event => {
  outputText.textContent = event.currentTarget.value || 'Anonymous';
});

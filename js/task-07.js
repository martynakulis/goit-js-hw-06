const inputRange = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');

spanText.style.fontSize = '56px';

inputRange.addEventListener('input', () => {
  spanText.style.fontSize = inputRange.value + 'px';
});

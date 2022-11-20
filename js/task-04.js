let counterValue = 0;
const value = document.querySelector('span#value');

const firstButton = document.querySelector('[data-action="decrement"]');
const decrement = () => {
  counterValue -= 1;
  return (value.textContent = counterValue);
};

firstButton.addEventListener('click', decrement);

const secondButton = document.querySelector('[data-action="increment"]');
const increment = () => {
  counterValue += 1;
  return (value.textContent = counterValue);
};

secondButton.addEventListener('click', increment);

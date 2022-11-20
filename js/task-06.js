const formInput = document.querySelector('input');

const eventHandler = event => {
  if (event.currentTarget.value.length === Number(formInput.dataset.length)) {
    formInput.classList.add('valid');
    formInput.classList.remove('invalid');
  } else {
    formInput.classList.add('invalid');
    formInput.classList.remove('valid');
  }
};

formInput.addEventListener('blur', eventHandler);

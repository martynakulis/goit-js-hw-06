const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === '' || password.value === '') {
    return alert('Complete the form fields!');
  }

  event.currentTarget.reset();
  console.log({ email: email.value, password: password.value });
});

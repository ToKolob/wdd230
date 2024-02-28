const password = document.querySelector('#password');
const passwordConfirmation = document.querySelector('#passwordConfirmation');


passwordConfirmation.addEventListener('input', () => {
  if (password.value !== passwordConfirmation.value) {
    passwordConfirmation.setCustomValidity('Passwords do not match');
    passwordConfirmation.style.backgroundColor = 'rgb(255, 0, 0, 0.1)';
  } else {
    passwordConfirmation.setCustomValidity('');
    passwordConfirmation.style.backgroundColor = 'rgb(0, 255, 0, 0.1)';
    passwordConfirmation.style.color = 'black';
  }
})


import Auth from '../modules/Auth.modules';
import { setUtils } from './localStorage.utils';

export default function authFormHanlerUtils() {
  const authForm = document.getElementById('auth__form');
  if (!authForm) return;
  const emailField = authForm.querySelector('#email');
  const passwordField = authForm.querySelector('#password');
  const btnSsubmit = authForm.querySelector('#btnSsubmit');
  const authAlert = authForm.querySelector('.auth__alert');

  let SUBMIT_COUNT = 0;

  authForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (emailField.value && passwordField.value) {
      Auth.login({ email: emailField.value, password: passwordField.value });

      setUtils('userData', {
        email: emailField.value,
        password: passwordField.value,
      });
    }

    emailField.value = '';
    passwordField.value = '';
  });

  btnSsubmit.addEventListener('click', () => {
    SUBMIT_COUNT += 1;
    if (SUBMIT_COUNT >= process.env.APP_MAX_SUBMIT_COUNT) {
      btnSsubmit.disabled = true;
      authAlert.classList.add('transparent');

      setTimeout(() => {
        btnSsubmit.disabled = false;
        SUBMIT_COUNT = 0;
        authAlert.classList.remove('transparent');
      }, 4500);
    }
  });
}

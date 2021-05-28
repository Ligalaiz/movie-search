import { getUtils } from '../utils/localStorage.utils';
import Auth from './Auth.modules';

const MILLISECONDS_ARG = 1000;

export default function firebaseTokenChangedChannel() {
  const token = Auth.getToken(process.env.APP_TOKEN_KEY);

  if (token) {
    const base64Url = token.split('.')[1];
    const base64 = decodeURIComponent(atob(base64Url).split('').map((c) => {
      return `%${(`00${c.charCodeAt(0).toString(16)}`).slice(-2)}`;
    }).join(''));
    const expTime = JSON.parse(base64).exp * MILLISECONDS_ARG;
    const currentTime = new Date();

    if (currentTime >= expTime) {
      Auth.login(getUtils('userData'));
    }
  }
}

import axios from 'axios';
import AuthModules from '../modules/Auth.modules';
import firebaseTokenChangedChannel from '../modules/firebaseTokenChangedChannel.modules';
import authFormHanlerUtils from '../utils/authFormHanler.utils';
import { getUtils } from '../utils/localStorage.utils';

const requestAxios = axios.create({
  baseURL: process.env.APP_FB_URL,
});

function authHandler() {
  window.location.hash = `${process.env.APP_FB_PATH}#auth/`;
  setTimeout(() => AuthModules.logout());
  setTimeout(() => authFormHanlerUtils());
}

requestAxios.interceptors.response.use(null, (error) => {
  if (error.response.status === 401) {
    if (getUtils(process.env.APP_TOKEN_KEY)) {
      firebaseTokenChangedChannel();
    } else {
      authHandler();
    }
  }
  return Promise.reject(error);
});

export default requestAxios;

import axios from 'axios';
import initializationSearchPageUtils from '../utils/initializationSearchPage.utils';

import { cleanStorageUtils, getUtils, setUtils } from '../utils/localStorage.utils';

export default {
  setToken(token) {
    setUtils(process.env.APP_TOKEN_KEY, token);
  },

  getToken(token) {
    return getUtils(token);
  },

  isAuthenticated() {
    return !!this.getToken();
  },

  logout() {
    cleanStorageUtils(process.env.APP_TOKEN_KEY);
    cleanStorageUtils('userData');
  },

  async login(payload) {
    try {
      const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.APP_FB_KEY}`;
      const { data } = await axios.post(url, {
        ...payload,
        returnSecureToken: true,
      });

      this.setToken(data.idToken);
      window.location.hash = `${process.env.APP_FB_PATH}/#`;
      initializationSearchPageUtils();
    } catch (e) {
      throw new Error(e.message);
    }
  },
};

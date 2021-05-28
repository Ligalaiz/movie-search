import axios from '../axios/request.axios';
import { getUtils } from '../utils/localStorage.utils';

export default {
  async request(payload) {
    try {
      const token = getUtils(process.env.APP_TOKEN_KEY);
      await axios.put(`/requests/${payload.imdbID}.json?auth=${token}`, payload);
    } catch (e) {
      throw new Error(e.message);
    }
  },
  async delete(imdbID) {
    let status = null;
    try {
      const token = getUtils(process.env.APP_TOKEN_KEY);
      const { data } = await axios.delete(`/requests/${imdbID}.json?auth=${token}`, null);
      status = data;
    } catch (e) {
      throw new Error(e.message);
    }
    return !status;
  },
  async load() {
    let movieData = null;
    try {
      const token = getUtils(process.env.APP_TOKEN_KEY);
      const { data } = await axios.get(`/requests.json?auth=${token}`);
      movieData = data;
    } catch (e) {
      throw new Error(e.message);
    }
    return movieData;
  },
  async loadMovie(imdbID) {
    let movieData = null;
    try {
      const token = getUtils(process.env.APP_TOKEN_KEY);
      const { data } = await axios.get(`/requests/${imdbID}.json?auth=${token}`);
      movieData = data;
    } catch (e) {
      throw new Error(e.message);
    }
    return movieData;
  },
};

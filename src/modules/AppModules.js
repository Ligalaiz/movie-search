import axios from 'axios';
import { preloaderRenderUtils } from '../utils/preloaderRender.util';

export default class AppModel {
  constructor(state) {
    this.state = state;
  }

  static extractClipNames(data) {
    return data.Search;
  }

  async getClipNames() {
    const { url } = this.state;
    const { data } = await axios.get(url);
    if (data.Error === undefined) {
      return AppModel.extractClipNames(data);
    } else {
      console.log(`No result for ${this.title}`);
      return;
    }
  }

  async getMovieInfo(imdbID) {
    preloaderRenderUtils();
    const url = `https://www.omdbapi.com/?i=${imdbID}&apikey=${process.env.APP_KEY}`;

    const { data } = await axios.get(url);
    if (data.Error === undefined) {
      return data;
    } else {
      console.log(`No result for ${this.title}`);
      return;
    }
  }
}

import AppModel from '../modules/AppModules';
import { preloaderRemoveUtils } from '../utils/preloaderRender.util';
import AppView from '../views/AppView';

export default class App {
  constructor(request = 'dream') {
    this.state = {
      title: request,
      url: `https://www.omdbapi.com/?s=${request}&apikey=${process.env.APP_KEY}`,
    };
  }

  async start() {
    try {
      const model = new AppModel(this.state);
      const dataNames = await model.getClipNames();

      const movies = await Promise.all(
        dataNames.map(async (movie) => {
          const movieInfo = await model.getMovieInfo(movie.imdbID);
          movie.Detail = movieInfo;
          return movie;
        }),
      );
      const view = new AppView(movies);
      setTimeout(() => preloaderRemoveUtils(), 1000);
      setTimeout(() => view.render(), 1500);
    } catch (e) {
      throw new Error(e.message);
    }
  }
}

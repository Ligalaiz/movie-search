import { movieItemComponents } from '../components';
import AppModel from '../modules/AppModules';
import RequestModules from '../modules/RequestModules';
import { preloaderRemoveUtils } from './preloaderRender.util';
import removeChildNodesUtils from './removeChildNodes.utils';
import watchListSortUtils from './watchListSort.utils';

async function renderMovies(obj) {
  const {
    watchList,
    moviesData,
    filter,
    sort,
  } = obj;

  const model = new AppModel();
  removeChildNodesUtils(watchList);

  let movieArr = Object.entries(moviesData).map(async (movie) => {
    const movieInfo = await model.getMovieInfo(movie[0]);

    return { ...movieInfo, ...movie[1] };
  });

  if (sort) {
    movieArr = await watchListSortUtils({ movieArr, sort });
  }

  async function currentRender(movie) {
    const movieTemplate = await movieItemComponents(movie);
    const movieItem = document.createElement('div');

    movieItem.dataset.id = await movie.imdbID;
    movieItem.innerHTML = movieTemplate;

    preloaderRemoveUtils();
    watchList.append(movieItem);
  }

  await movieArr.forEach(async (item) => {
    const movie = await item;

    if (filter) {
      const regExp = new RegExp(`${filter}`, 'gi');
      const isMovie = movie.Title.match(regExp);

      if (isMovie) {
        currentRender(movie);
      }
    } else {
      currentRender(movie);
    }
  });
}

export default async function watchListRenderUtils(payload = {}) {
  const { filter = null, sort = null } = payload;
  const watchList = document.getElementById('watchList');
  const moviesData = await RequestModules.load();

  if (!moviesData) {
    watchList.innerHTML = '<span class="additionalCard__message">You don\'t invite movie yet</span>';
    return;
  }

  await renderMovies({
    watchList,
    moviesData,
    filter,
    sort,
  });
}

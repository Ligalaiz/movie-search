import detailComponents from '../components/detail.components';
import AppModel from '../modules/AppModules';
import RequestModules from '../modules/RequestModules';
import detailHandlerUtils from './detailHandler.utils';

export default async function detailRenderUtils(imdbID) {
  const detailMovie = document.getElementById('detailMovie');

  if (!detailMovie) return;

  const model = new AppModel();
  const movieData = await model.getMovieInfo(imdbID);
  let localMovieData = await RequestModules.loadMovie(imdbID);

  const baseData = {
    imdbID,
    rating: 0,
    status: 'cleanStatus',
  };

  if (!localMovieData) localMovieData = baseData;
  const data = { ...localMovieData, ...movieData };

  detailMovie.innerHTML = await detailComponents(data);
  detailHandlerUtils();
}

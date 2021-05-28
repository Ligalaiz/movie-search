import additionalCard from '../components/additionalCard.components';
import AppModel from '../modules/AppModules';
import RequestModules from '../modules/RequestModules';
import movieCardHandlerUtils from './movieCardHandler.utils';
import { preloaderRemoveUtils } from './preloaderRender.util';

export default function swiperHandlerUtils() {
  const swiperField = document.getElementById('swiperField');
  if (!swiperField) return;

  swiperField.addEventListener('click', async (e) => {
    const parent = document.querySelector('.additionalCard__wrap');
    e.preventDefault();
    const { target } = e;

    if (target.closest('[data-id]')) {
      const imdbID = target.closest('[data-id]').dataset.id;

      const model = new AppModel();

      const movieData = await model.getMovieInfo(imdbID);
      let localMovieData = await RequestModules.loadMovie(imdbID);
      const baseData = {
        imdbID,
        rating: 0,
        status: 'cleanStatus',
      };

      if (!localMovieData) localMovieData = baseData;
      const detail = { ...localMovieData, ...movieData };

      const payload = {
        title: detail.Title,
        imgPath: detail.Poster,
        imdbID: detail.imdbID,
        imdbRating: detail.imdbRating,
        year: detail.Year,
        plot: detail.Plot,
        genre: detail.Genre,
        runtime: detail.Runtime,
        rating: detail.rating,
        status: detail.status,
      };
      preloaderRemoveUtils();
      parent.innerHTML = additionalCard(payload);

      movieCardHandlerUtils();
    }
  });
}

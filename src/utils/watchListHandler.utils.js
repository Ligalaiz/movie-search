import { movieMessageComponents } from '../components';
import RequestModules from '../modules/RequestModules';
import movieStatusUse from '../use/movieStatus.use';
import detailHandlerUtils from './detailHandler.utils';
import detailRender from './detailRender.utils';
import searchWatchListUtils from './searchWatchList.utils';

export default function watchListHandlerUtils() {
  const watchList = document.getElementById('watchList');

  function handler(e) {
    const { target } = e;

    if ({}.hasOwnProperty.call(target.dataset, 'btnDetail')) {
      const imdbID = target.dataset.btnDetail;
      window.location.hash = `${process.env.APP_FB_PATH}#detail/`;
      setTimeout(() => {
        detailRender(imdbID);
        detailHandlerUtils(imdbID);
      }, 10);
    }

    if ({}.hasOwnProperty.call(target.dataset, 'btnLater')) {
      const currentStatus = target.dataset.status;
      const imdbID = target.dataset.btnLater;

      const { status } = movieStatusUse(currentStatus);
      target.dataset.status = status;
      target.textContent = movieStatusUse(currentStatus).statusText;

      const result = document.getElementById(`starList-${imdbID}`);
      const rating = result.getElementsByTagName('input[name="rating"]:checked')
        ? result.getElementsByTagName('input[name="rating"]:checked').value
        : 0;

      const payload = {
        imdbID,
        rating,
        status,
      };

      RequestModules.request(payload);
    }

    if (target.closest('[data-star-list]')) {
      const imdbID = target.closest('[data-star-list]').dataset.starList;
      const result = document.getElementById(`starList-${imdbID}`);
      const rating = result.querySelector(`.star__item-${imdbID}:checked`)
        ? result.querySelector(`.star__item-${imdbID}:checked`).value
        : 0;
      const currentStatus = document.querySelector(`a[data-btn-later="${imdbID}"]`).dataset.status;

      const payload = {
        imdbID,
        rating,
        status: currentStatus,
      };

      RequestModules.request(payload);
    }

    if ({}.hasOwnProperty.call(target.dataset, 'btnDelete')) {
      const imdbID = target.dataset.btnDelete;
      RequestModules.delete(imdbID);
      watchList.querySelector(`div[data-id="${imdbID}"]`).remove();

      const movieMessage = document.createElement('div');
      movieMessage.classList.add('movie-message', 'movie-message--delete');
      movieMessage.innerHTML = movieMessageComponents(imdbID);
      watchList.append(movieMessage);
      setTimeout(() => movieMessage.remove(), 2000);

      if (!watchList.firstChild) {
        watchList.innerHTML = '<span class="additionalCard__message">You don\'t invite movie yet</span>';
      }
    }
  }

  searchWatchListUtils();
  watchList.addEventListener('click', handler);
}

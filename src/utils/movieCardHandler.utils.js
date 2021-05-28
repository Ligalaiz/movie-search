import RequestModule from '../modules/RequestModules';
import movieStatusUse from '../use/movieStatus.use';
import detailHandlerUtils from './detailHandler.utils';
import detailRenderUtils from './detailRender.utils';
import { setUtils } from './localStorage.utils';

export default function movieCardHandlerUtils() {
  const movieBtn = document.getElementById('movie-btn');
  const watchLaterBtn = document.getElementById('watchLaterBtn');
  const starList = document.getElementById('starList');

  if (!movieBtn || !watchLaterBtn || !starList) return;

  movieBtn.addEventListener('click', (e) => {
    const { target } = e;
    const imdbID = target.closest('[data-id]').dataset.id;

    window.location.hash = '#detail/';

    setUtils('last', imdbID);
    setTimeout(() => {
      detailRenderUtils(imdbID);
      detailHandlerUtils(imdbID);
    }, 10);
  });

  watchLaterBtn.addEventListener('click', (e) => {
    const { target } = e;

    const currentStatus = watchLaterBtn.dataset.status;

    const { status } = movieStatusUse(currentStatus);
    watchLaterBtn.dataset.status = status;
    watchLaterBtn.textContent = movieStatusUse(currentStatus).statusText;

    const imdbID = target.closest('[data-id]').dataset.id;
    const rating = document.querySelector('input[name="rating"]:checked')
      ? document.querySelector('input[name="rating"]:checked').value
      : 0;
    const payload = {
      imdbID,
      rating,
      status,
    };

    RequestModule.request(payload);
  });

  starList.addEventListener('click', (e) => {
    const { target } = e;
    console.log('movieCardHandlerUtils', 'statsList');
    const rating = document.querySelector('input[name="rating"]:checked')
      ? document.querySelector('input[name="rating"]:checked').value
      : 0;
    const imdbID = target.closest('[data-id]').dataset.id;
    const currentStatus = watchLaterBtn.dataset.status;

    switch (currentStatus) {
      case 'cleanStatus':
        watchLaterBtn.dataset.status = 'watched';
        watchLaterBtn.textContent = 'Watched';
    }

    const payload = {
      imdbID,
      rating,
      status: currentStatus,
    };
    console.log('payload', payload);
    RequestModule.request(payload);
  });
}

import RequestModule from '../modules/RequestModules';
import movieStatusUse from '../use/movieStatus.use';

export default function detailHandlerUtils() {
  const watchLaterBtn = document.getElementById('watchLaterBtn');
  const starList = document.getElementById('starList');

  if (!watchLaterBtn) return;
  if (!starList) return;

  watchLaterBtn.addEventListener('click', (e) => {
    const { target } = e;
    console.log('watchBtn');
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
    const rating = document.querySelector('input[name="rating"]:checked')
      ? document.querySelector('input[name="rating"]:checked').value
      : 0;
    const imdbID = target.closest('[data-id]').dataset.id;
    const currentStatus = watchLaterBtn.dataset.status;

    const payload = {
      imdbID,
      rating,
      status: currentStatus,
    };

    RequestModule.request(payload);
  });
}

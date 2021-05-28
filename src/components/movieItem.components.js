import starStyleUse from '../use/starStyle.use';

export default async function movieItemComponents(data) {
  const result = /* html */ `
  <style>
    ${starStyleUse(data.imdbID)}
 </style>
  <div
  class="additionalCard__item"
  id="additionalCard"
>
  <div class="additionalCard__img img">
    <img class="img__wrap" src=${data.Poster}>
  </div>
  <div class="additionalCard__description">
    <div
      class="rating-area-${data.imdbID} additionalCard__star"
      id="starList-${data.imdbID}"
      data-star-list=${data.imdbID}
    >
      <input class="star__item-${data.imdbID}" type="radio" id="star-5-${data.imdbID}" name="rating-${data.imdbID}" value="5" ${+data.rating === 5 ? 'checked' : ''}>
      <label for="star-5-${data.imdbID}" title="Оценка «5»"></label>

      <input class="star__item-${data.imdbID}" type="radio" id="star-4-${data.imdbID}" name="rating-${data.imdbID}" value="4"  ${+data.rating === 4 ? 'checked' : ''}>
      <label for="star-4-${data.imdbID}" title="Оценка «4»"></label>

      <input class="star__item-${data.imdbID}" type="radio" id="star-3-${data.imdbID}" name="rating-${data.imdbID}" value="3"  ${+data.rating === 3 ? 'checked' : ''}>
      <label for="star-3-${data.imdbID}" title="Оценка «3»"></label>

      <input class="star__item-${data.imdbID}" type="radio" id="star-2-${data.imdbID}" name="rating-${data.imdbID}" value="2" ${+data.rating === 2 ? 'checked' : ''}>
      <label for="star-2-${data.imdbID}" title="Оценка «2»"></label>

      <input class="star__item-${data.imdbID}" type="radio" id="star-1-${data.imdbID}" name="rating-${data.imdbID}" value="1" ${+data.rating === 1 ? 'checked' : ''}>
      <label for="star-1-${data.imdbID}" title="Оценка «1»"></label>
    </div>
    <p class="additionalCard__title">${data.Title}</p>
    <p class="additionalCard__rating">${data.imdbRating}</p>
    <p class="additionalCard__year">${data.Year}</p>
    <p class="additionalCard__plot">${data.Plot}</p>
    <p class="additionalCard__genre">${data.Genre}</p>
    <p class="additionalCard__runtime">${data.Runtime}</p>

    <div class="additionalCard__btn-bar btn-bar">
      <div class="btn-bar__left">
        <a class="additionalCard__movieInfo waves-effect waves-light btn-small"
        id="movie-btn" data-btn-detail=${data.imdbID}>
          More information
        </a>
        <a
          class="additionalCard__imdbLink waves-effect waves-light btn-small"
          href="https://www.imdb.com/title/${data.imdbID}"
        >
          Show on IMDB
        </a>
        <a
          class="additionalCard__movieStatus waves-effect waves-light btn-small"
          id="watchLaterBtn"
          data-status="${data.status}"
          data-btn-later=${data.imdbID}
        >
        Watch later
        </a>
      </div>
      <div class="btn-bar__right">
        <a
          class="additionalCard__movieDelete waves-effect red darken-4 btn-small"
          id="deleteFilm"
          data-btn-delete=${data.imdbID}
        >
        Delete
        </a>
      </div>
    </div>
  </div>
</div>
`;
  return result;
}

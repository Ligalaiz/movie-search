export default function additionalCard(data) {
  return /* html */ `
  <div
    class="additionalCard__item"
    id="additionalCard"
    data-id=${data.imdbID}
  >
    <div class="additionalCard__img img">
      <img class="img__wrap" src=${data.imgPath}>
    </div>
    <div class="additionalCard__description">

      <div class="rating-area additionalCard__star" id="starList">
        <input
          class="star__item"
          type="radio"
          id="star-5-${data.imdbID}"
          name="rating"
          value="5"
          ${+data.rating === 5 ? 'checked' : ''}
        >
        <label
          for="star-5-${data.imdbID}"
          title="Оценка «5»"
        ></label>

        <input class="star__item" type="radio" id="star-4-${data.imdbID}" name="rating" value="4" ${+data.rating === 4 ? 'checked' : ''}>
        <label for="star-4-${data.imdbID}" title="Оценка «4»"></label>

        <input class="star__item" type="radio" id="star-3-${data.imdbID}" name="rating" value="3" ${+data.rating === 3 ? 'checked' : ''}>
        <label for="star-3-${data.imdbID}" title="Оценка «3»"></label>

        <input class="star__item" type="radio" id="star-2-${data.imdbID}" name="rating" value="2" ${+data.rating === 2 ? 'checked' : ''}>
        <label for="star-2-${data.imdbID}" title="Оценка «2»"></label>

        <input class="star__item" type="radio" id="star-1-${data.imdbID}" name="rating" value="1" ${+data.rating === 1 ? 'checked' : ''}>
        <label for="star-1-${data.imdbID}" title="Оценка «1»"></label>
      </div>

      <p class="additionalCard__title">${data.title}</p>
      <p class="additionalCard__rating">${data.imdbRating}</p>
      <p class="additionalCard__year">${data.year}</p>
      <p class="additionalCard__plot">${data.plot}</p>
      <p class="additionalCard__genre">${data.genre}</p>
      <p class="additionalCard__runtime">${data.runtime}</p>

      <div class="additionalCard__btn-bar">
        <div class="btn-bar__left">
          <a class="additionalCard__movieInfo waves-effect waves-light btn-small"
          id="movie-btn">
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
          >
          Watch later
          </a>
       </div>
      </div>
    </div>
  </div>
`;
}

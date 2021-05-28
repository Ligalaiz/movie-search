export default function searchResult({
  title,
  imgPath,
  imdbID,
  imdbRating,
  year,
}) {
  return /* html */ `
  <div class="film__wrapp swiper-slide" data-id=${imdbID}>
    <div class="film">
      <div class="film__img img">
        <img class="img__wrapp" src=${imgPath}>
      </div>
      <div class="film__describtion">
        <p class="film__title">${title}</p>
        <p class="film__rating">${imdbRating}</p>
        <p class="film__year">${year}</p>
      </div>
    </div>
  </div>
`;
}

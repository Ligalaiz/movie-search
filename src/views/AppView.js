import { searchResult } from '../components';

export default class AppView {
  constructor(movies) {
    this.movies = movies;
  }

  render() {
    const cards = this.movies
      .map((movie) => {
        return searchResult({
          title: movie.Title,
          imgPath: movie.Poster,
          imdbID: movie.imdbID,
          imdbRating: movie.Detail.imdbRating,
          year: movie.Year,
        });
      })
      .join('');
    const wrap = /* html */ `
        ${cards}
      `;

    const content = document.getElementsByClassName('swiper-wrapper')[0];
    if (!content) return;
    content.innerHTML = wrap;
  }
}

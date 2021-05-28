export default function movieMessageComponents(imdbID) {
  return /* html */ `
  <div class="movie-message__card">
    <p>Movie has been ${imdbID ? 'added' : 'deleted'}</p>
  </div>
`;
}

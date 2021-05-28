export default async function watchListSortUtils({ movieArr, sort }) {
  let value = '';
  switch (sort) {
    case 'rating':
      value = 'rating';
      break;
    case 'imdbID':
      value = 'imdbRating';
      break;
    case 'year':
      value = 'Year';
      break;
    case 'abc':
      value = 'Title';
      break;
    case 'status':
      value = 'status';
      break;
  }

  const sortMovies = await movieArr.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
  return sortMovies;
}

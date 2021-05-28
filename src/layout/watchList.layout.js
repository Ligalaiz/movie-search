import { navbarComponents, searchWatchListComponents } from '../components';

const result = /* html */ `
  <div class="container search__container">
    ${navbarComponents}
    ${searchWatchListComponents}
     <div class="watchList" id="watchList"></div>
  </div>
`;

export default result;

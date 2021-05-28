import { navbarComponents, searchComponents } from '../components';

const search = /* html */ `
  <div class="container search__container">
    ${navbarComponents}
    ${searchComponents}
  </div>
  <div  class="film__container swiper-container" id="swiperField">
    <div class="swiper-wrapper">
    </div>
  </div>
  <div class="swiper-pagination"></div>
  <div class="container additionalCard__wrap"></div>
`;

export default search;

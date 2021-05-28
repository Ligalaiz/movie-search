import Swiper from 'swiper/bundle';
import initializationSwiper from '../use/initializationSwiper.use';
import App from '../controllers';
import removeChildNodesUtils from './removeChildNodes.utils';
import { setUtils, cleanStorageUtils } from './localStorage.utils';

const SEARCH_FIELD_LENGTH_MIN = 3;

function renderRequest(searchField) {
  if (searchField.value.length >= SEARCH_FIELD_LENGTH_MIN) {
    const app = new App(searchField.value);
    const swiper = new Swiper('.swiper-container', initializationSwiper);

    setUtils('search', searchField.value);
    const filmContainer = document.getElementsByClassName('swiper-wrapper')[0];
    removeChildNodesUtils(filmContainer);
    app.start();
  }
}

function changeDefaultBehavior(e) {
  if (e.code === 'Enter') {
    e.preventDefault();
  }
}

function cleanSearchField(searchField) {
  const temp = searchField;
  cleanStorageUtils('search');
  temp.value = '';
}

export default function searchHadlerUtils() {
  try {
    const searchField = document.querySelector('#search');
    const closeBtn = document.querySelector('.search__btn--close');

    if (!searchField || !closeBtn) return;

    searchField.addEventListener('input', () => {
      renderRequest(searchField);
    });

    closeBtn.addEventListener('click', () => cleanSearchField(searchField));
    searchField.addEventListener('keypress', changeDefaultBehavior);

    searchField.removeEventListener('input', renderRequest);
    closeBtn.removeEventListener('click', cleanSearchField);
    searchField.removeEventListener('input', changeDefaultBehavior);
  } catch (e) {
    throw new Error(e.message);
  }
}

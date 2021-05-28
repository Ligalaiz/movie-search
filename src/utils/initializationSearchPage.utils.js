import Swiper from 'swiper';
import App from '../controllers';
import initializationSwiper from '../use/initializationSwiper.use';
import checkSearchStorage from './checkSearchStorage.utils';
import { getUtils } from './localStorage.utils';
import searchHadlerUtils from './searchHandler.utils';

export default function initializationSearchPageUtils() {
  const app = new App(getUtils('search') ? getUtils('search') : undefined);
  app.start();
  setTimeout(() => {
    searchHadlerUtils();
    checkSearchStorage();
    const swiper = new Swiper('.swiper-container', initializationSwiper);
  });
}

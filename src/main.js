import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min';
import Swiper from 'swiper/bundle';
import router from './router';
import App from './controllers';
import searchHadlerUtils from './utils/searchHandler.utils';
import { getUtils } from './utils/localStorage.utils';
import checkSearchStorageUtils from './utils/checkSearchStorage.utils';
import '../node_modules/swiper/swiper-bundle.css';
import './styles/main.scss';
import initializationSwiperUse from './use/initializationSwiper.use';
import authFormHanlerUtils from './utils/authFormHanler.utils';
import menuHandlerUtils from './utils/menuHandler.utils';
import state from './state';
import swiperHandlerUtils from './utils/swiperHandler.utils';
import watchListRenderUtils from './utils/watchListRender.utils';
import watchListHandlerUtils from './utils/watchListHandler.utils';
import initalizationMobileMenu from './use/initializationMobileMenu.use';

const app = new App(getUtils('search') ? getUtils('search') : undefined);
if (getUtils('jwt-token')) {
  app.start();
} else {
  window.location.hash = `${process.env.APP_FB_PATH}/#auth/`;
}

window.addEventListener('load', () => {
  router();
  state();
  authFormHanlerUtils();

  if (getUtils('jwt-token')) {
    menuHandlerUtils();
    const swiper = new Swiper('.swiper-container', initializationSwiperUse);
    switch (window.location.hash) {
      case `${process.env.APP_FB_PATH}/#watchList/`:
        watchListRenderUtils({ filter: getUtils('searchWatch') });
        watchListHandlerUtils();
        checkSearchStorageUtils('searchWatch');
        break;
      case `${process.env.APP_FB_PATH}/#detail/`:
        window.location.hash = `${process.env.APP_FB_PATH}/#`;
        break;
      default:
        searchHadlerUtils();
        swiperHandlerUtils();
        checkSearchStorageUtils('search');
    }
    initalizationMobileMenu();
  } else {
    window.location.href = `${process.env.APP_FB_PATH}/#auth/`;
  }
});
window.addEventListener('hashchange', router);

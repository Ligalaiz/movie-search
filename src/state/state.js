import checkSearchStorageUtils from '../utils/checkSearchStorage.utils';
import initializationSearchPageUtils from '../utils/initializationSearchPage.utils';
import { getUtils } from '../utils/localStorage.utils';
import menuHandlerUtils from '../utils/menuHandler.utils';
import searchHadler from '../utils/searchHandler.utils';
import swiperHandlerUtils from '../utils/swiperHandler.utils';
import authFormHanlerUtils from '../utils/authFormHanler.utils';
import watchListHandlerUtils from '../utils/watchListHandler.utils';
import watchListRenderUtils from '../utils/watchListRender.utils';
import detailRenderUtils from '../utils/detailRender.utils';
import detailHandlerUtils from '../utils/detailHandler.utils';
import initalizationMobileMenu from '../use/initializationMobileMenu.use';

export default function state() {
  window.addEventListener('hashchange', () => {
    if (getUtils('jwt-token')) {
      switch (window.location.hash) {
        case '#watchList/':
          watchListRenderUtils({ filter: getUtils('searchWatch') });
          watchListHandlerUtils();
          checkSearchStorageUtils('searchWatch');
          break;
        case '#auth/':
          setTimeout(() => authFormHanlerUtils());
          break;
        case '#detail/':
          setTimeout(() => {
            detailRenderUtils(getUtils('last'));
            detailHandlerUtils(getUtils('last'));
          }, 10);
          break;
        default:
          searchHadler();
          swiperHandlerUtils();
          checkSearchStorageUtils('search');
          initializationSearchPageUtils();
      }
      menuHandlerUtils();
      initalizationMobileMenu();
    } else {
      window.location.href = 'http://localhost:8080/#auth/';
    }
  });
}

import AuthModules from '../modules/Auth.modules';
import initializationSearchPageUtils from './initializationSearchPage.utils';
import authFormHanlerUtils from './authFormHanler.utils';

export default function menuHandlerUtils() {
  const root = document.getElementById('root');

  root.addEventListener('click', (e) => {
    const shadow = document.getElementsByClassName('sidenav-overlay')[0];
    if (e.target.dataset) {
      if (e.target.dataset.link) e.preventDefault();
      switch (e.target.dataset.link) {
        case 'main':
          window.location.hash = `${process.env.APP_FB_PATH}/#`;
          initializationSearchPageUtils();
          break;
        case 'account':
          window.location.hash = `${process.env.APP_FB_PATH}/#watchList/`;
          break;
        case 'logout':
          AuthModules.logout();
          window.location.hash = `${process.env.APP_FB_PATH}/#auth/`;
          setTimeout(() => authFormHanlerUtils());
          break;
      }
    }
    if (shadow) shadow.remove();
  });
}

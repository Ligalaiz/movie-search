import {
  searchLayout,
  authLayout,
  errorLayout,
  detailLayout,
  watchListLayout,
} from '../layout';

const routes = [
  {
    path: `${process.env.APP_FB_PATH}/#`,
    component: searchLayout,
    meta: { auth: true },
  },
  {
    path: `${process.env.APP_FB_PATH}/#auth/`,
    component: authLayout,
    meta: { auth: false },
  },
  {
    path: `${process.env.APP_FB_PATH}/#watchList/`,
    component: watchListLayout,
    meta: { auth: true },
  },
  {
    path: `${process.env.APP_FB_PATH}/#detail/`,
    component: detailLayout,
    meta: { auth: true },
  },
  {
    path: `${process.env.APP_FB_PATH}/#error/`,
    component: errorLayout,
    meta: { auth: false },
  },
];
const parseLocation = () => window.location.hash || `${process.env.APP_FB_PATH}/#`;
const findComponentByPath = (path, routes) => routes.find((r) => r.path.match(new RegExp(`^\\${path}$`, 'gmi'))) || undefined;

const router = () => {
  const path = parseLocation();
  const { component = errorLayout } = findComponentByPath(path, routes) || {};
  document.getElementById('root').innerHTML = component;
};

export default router;

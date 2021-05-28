import {
  searchLayout,
  authLayout,
  errorLayout,
  detailLayout,
  watchListLayout,
} from '../layout';

const routes = [
  {
    path: '#',
    component: searchLayout,
    meta: { auth: true },
  },
  {
    path: '#auth/',
    component: authLayout,
    meta: { auth: false },
  },
  {
    path: '#watchList/',
    component: watchListLayout,
    meta: { auth: true },
  },
  {
    path: '#detail/',
    component: detailLayout,
    meta: { auth: true },
  },
  {
    path: '#error/',
    component: errorLayout,
    meta: { auth: false },
  },
];
const parseLocation = () => window.location.hash || '#';
const findComponentByPath = (path, routes) => routes.find((r) => r.path.match(new RegExp(`^\\${path}$`, 'gmi'))) || undefined;

const router = () => {
  const path = parseLocation();
  const { component = errorLayout } = findComponentByPath(path, routes) || {};
  document.getElementById('root').innerHTML = component;
};

export default router;

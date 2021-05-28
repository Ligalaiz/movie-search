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

function findComponentByPath(path, routes) {
  return routes.find((r) => {
    const a = document.createElement('a');
    a.href = r.path;
    const result = a.hash || '#';
    return result === path;
  }) || undefined;
}

const router = () => {
  const path = parseLocation();
  const { component = errorLayout } = findComponentByPath(path, routes) || {};
  document.getElementById('root').innerHTML = component;
};

export default router;

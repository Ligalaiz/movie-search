import {
  searchLayout,
  authLayout,
  errorLayout,
  detailLayout,
  watchListLayout,
} from '../layout';

const routes = [
  {
    path: `${process.env.APP_FB_PATH}#`,
    component: searchLayout,
    meta: { auth: true },
  },
  {
    path: `${process.env.APP_FB_PATH}#auth/`,
    component: authLayout,
    meta: { auth: false },
  },
  {
    path: `${process.env.APP_FB_PATH}#watchList/`,
    component: watchListLayout,
    meta: { auth: true },
  },
  {
    path: `${process.env.APP_FB_PATH}#detail/`,
    component: detailLayout,
    meta: { auth: true },
  },
  {
    path: `${process.env.APP_FB_PATH}#error/`,
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

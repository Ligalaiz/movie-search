import { preloaderComponents } from '../components';

const preloader = document.createElement('div');

function preloaderRenderUtils() {
  const parent = document.getElementById('root');

  preloader.classList.add('container', 'preloader__wrap');
  preloader.innerHTML = preloaderComponents;
  parent.append(preloader);
  return preloader;
}

function preloaderRemoveUtils() {
  preloader.remove();
}

export { preloaderRenderUtils, preloaderRemoveUtils };

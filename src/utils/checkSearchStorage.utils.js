import { getUtils } from './localStorage.utils';

export default function checkSearchStorageUtils(value) {
  const search = document.querySelector(`#${value}`);
  if (!search) return;
  search.value = getUtils(`${value}`) ? getUtils(`${value}`) : '';
}

import initializationDropDownUse from '../use/initializationDropDown.use';
import watchListRenderUtils from './watchListRender.utils';
import { cleanStorageUtils, setUtils } from './localStorage.utils';

const SEARCH_FIELD_LENGTH_MIN = 3;

function renderRequest(searchValue) {
  if (searchValue.length >= SEARCH_FIELD_LENGTH_MIN) {
    watchListRenderUtils({ filter: searchValue });
    setUtils('searchWatch', searchValue);
  }
}

function cleanSearchField(searchField) {
  const temp = searchField;
  cleanStorageUtils('searchWatch');
  temp.value = '';
}

export default function searchWatchListUtils() {
  const searchField = document.getElementById('searchWatch');
  const closeBtn = document.querySelector('.watchList__btn--close');
  initializationDropDownUse();
  const dropdown = document.getElementById('watchList--dropdown');

  if (!searchField || !closeBtn) return;

  searchField.addEventListener('input', () => {
    renderRequest(searchField.value);
  });

  closeBtn.addEventListener('click', () => {
    cleanSearchField(searchField);
    watchListRenderUtils();
  });

  dropdown.addEventListener('click', (e) => {
    const { target } = e;

    if (target.dataset.dropdown) {
      e.preventDefault();
      const sort = target.dataset.dropdown;

      cleanSearchField(searchField);
      watchListRenderUtils({ sort });
    }
  });
}

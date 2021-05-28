import M from 'materialize-css';

export default function initializationDropDownUse() {
  const elems = document.querySelectorAll('.dropdown-trigger');
  M.Dropdown.init(elems);
}

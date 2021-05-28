import M from 'materialize-css';

export default function initalizationMobileMenu() {
  const elems = document.querySelectorAll('.sidenav');
  M.Sidenav.init(elems, {
    menuWidth: 300,
    edge: 'right',
  });
}

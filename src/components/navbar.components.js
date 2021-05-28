const navbar = /* html */ `
<nav class="navbar teal accent-4">
    <div class="nav-wrapper">
      <a class="brand-logo">Movie search</a>
      <a href="#" data-target="mobile-menu" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li class="nav__item"><a data-link="main" href="#">Main</a></li>
        <li class="nav__item"><a data-link="account" href="#">Watch list</a></li>
        <li class="nav__item"><a data-link="logout" href="#">Log out</a></li>
      </ul>
    </div>
  </nav>
  <ul class="sidenav" id="mobile-menu">
    <li class="nav__item"><a data-link="main" href="#">Main</a></li>
    <li class="nav__item"><a data-link="account" href="#">Watch list</a></li>
    <li class="nav__item"><a data-link="logout" href="#">Log out</a></li>
</ul>
  `;

export default navbar;

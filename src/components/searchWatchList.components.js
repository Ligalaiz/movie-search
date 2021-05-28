const search = /* html */ `
  <ul id="watchList--dropdown" class="dropdown-content">
    <li><a href="#!" data-dropdown="rating">rating</a></li>
    <li><a href="#!" data-dropdown="imdbID">imdbID</a></li>
    <li class="divider">Default</li>
    <li><a href="#!" data-dropdown="year">year</a></li>
    <li><a href="#!" data-dropdown="abc">abc</a></li>
    <li><a href="#!" data-dropdown="status">status</a></li>
  </ul>
  <nav class="searchField teal accent-4">
      <div class="nav-wrapper">
        <form>
          <div class="input-field watchList__field">
            <input class="search__field" id="searchWatch" type="search">
            <label class="label-icon" for="search">
              <i class="material-icons">search</i>
            </label>
            <i class="material-icons watchList__btn watchList__btn--close">close</i>
            <div class="watchList__select">
              <a
                class="dropdown-trigger watchList__trigger"
                href="#!"
                data-target="watchList--dropdown"
              >
              Sort
                <i class="material-icons right watchList__arrow" id="arrowWatchlist">arrow_drop_down</i>
              </a>
            </div>
          </div>

        </form>
      </div>
    </nav>`;

export default search;

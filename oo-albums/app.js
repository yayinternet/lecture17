const JSON_PATH = 'https://yayinternet.github.io/lecture17/oo-albums/albums.json';
const SORT_YEAR_ASC = function(a, b) {
  return a.year - b.year;
};
const SORT_YEAR_DESC = function(a, b) {
  return b.year - a.year;
};
const SORT_ALPHA_TITLE = function(a, b) {
  const titleA = a.name.toUpperCase();
  const titleB = b.name.toUpperCase();
  if (titleA < titleB) { return -1; }
  if (titleA > titleB) { return 1; }
  return 0;
};

class App {
  constructor() {
    this._onJsonReady = this._onJsonReady.bind(this);
    this._sortAlbums = this._sortAlbums.bind(this);

    this.albumInfo = {};

    const ascElement = document.querySelector('#asc');
    const ascButton = new SortButton(
      ascElement, this._sortAlbums, SORT_YEAR_ASC);
    const descElement = document.querySelector('#desc');
    const descButton = new SortButton(
      descElement, this._sortAlbums, SORT_YEAR_DESC);
    const alphaElement = document.querySelector('#alpha');
    const alphaButton = new SortButton(
      alphaElement, this._sortAlbums, SORT_ALPHA_TITLE);
  }

  _sortAlbums(sortFunction) {
    this.albumInfo.sort(sortFunction);
    this._renderAlbums();
  }

  _renderAlbums() {
    const albumContainer = document.querySelector('#album-container');
    albumContainer.innerHTML = '';
    for (const info of this.albumInfo) {
      const album = new Album(albumContainer, info.url);
    }
  }

  loadAlbums() {
    fetch(JSON_PATH)
        .then(this._onResponse)
        .then(this._onJsonReady);
  }

  _onJsonReady(json) {
    this.albumInfo = json.albums;
    this._renderAlbums();
  }

  _onResponse(response) {
    return response.json();
  }
}

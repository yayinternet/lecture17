class App {
  constructor() {
    this._loadAlbums();
  }

  _loadAlbums() {
    fetch('albums.json')
        .then(this._onResponse)
        .then(this._onJsonReady);
  }

  _onJsonReady(json) {
    const albums = json.albums;
    // Let's print the albums fetched.
    for (const album of albums) {
      console.log(album);
    }
  }

  _onResponse(response) {
    return response.json();
  }
}

class Album {
  constructor(title, year, imageUrl) {
    this.title = title;
    this.year = year;
    this.imageUrl = imageUrl;

    // Same as document.createElement('img');
    this.domElement = new Image();
    this.domElement.src = imageUrl;
  }

  renderTo(containerElement) {
    containerElement.append(this.domElement);
  }

  remove() {
    this.domElement.remove();
  }
}

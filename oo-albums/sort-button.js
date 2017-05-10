class SortButton {
  constructor(containerElement, onClickCallback, sortFunction) {
    this._onClick = this._onClick.bind(this);
    this.onClickCallback = onClickCallback;

    this.sortFunction = sortFunction;
    containerElement.addEventListener('click', this._onClick);
  }

  _onClick() {
    this.onClickCallback(this.sortFunction);
  }
}

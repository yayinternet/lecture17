function onTextReady(text) {
  const albumStrings = text.split('\n\n');
  const albums = [];
  for (let i = 0; i < albumStrings.length; i++) {
    const infoText = albumStrings[i];
    const infoStrings = infoText.split('\n');
    const name = infoStrings[0];
    const year = infoStrings[1];
    const url = infoStrings[2];
    albums.push({
      name: name,
      year: parseInt(year),
      url: url
    });
  }
  // Sort albums by year.
  albums.sort(function(a, b) {
    return a.year - b.year;
  });
  // Add album images to body.
  for (const album of albums) {
    const image = new Image();
    image.src = albumInfo.url;
    document.body.append(image);
  }
}

function onResponse(response) {
  return response.text();
}

fetch('albums.txt')
    .then(onResponse)
    .then(onTextReady);

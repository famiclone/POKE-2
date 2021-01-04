export function loadJSON(url) {
  return fetch(url).then((response) => response.json())
}

export function loadPokemonInfo(name) {
  return fetch(`../pokemon/${name}.json`).then((response) => response.json())
}

export function loadImage(url) {
  return fetch(url).then((image) => {
    const img = new Image()
    img.src = image.src
  })
}

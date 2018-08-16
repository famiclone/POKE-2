export default function generateMap(context, tileset, config) {

  const mapArray = [
    ['t', 'w', 't', 't', 't', 't', 't', 't', 't', 't'],
    ['t', 't', 't', 't', 't', 't', 't', 't', 't', 't'],
    ['t', 't', 't', 't', 't', 't', 't', 't', 't', 't'],
    ['t', 't', 'a', 't', 't', 't', 't', 't', 't', 't'],
    ['t', 't', 't', 't', 't', 't', 't', 't', 't', 't'],
    ['t', 't', 't', 't', 't', 't', 'w', 't', 't', 't'],
    ['t', 't', 't', 't', 't', 't', 't', 't', 't', 't'],
    ['t', 'w', 't', 't', 't', 't', 't', 't', 't', 't'],
    ['t', 't', 't', 't', 't', 't', 't', 't', 't', 't'],
  ];

  const tiles = {
    'tile': [0, 0],
    'wreckTile': [16, 0],
    'a': [16, 16],
  };

  const drawTile = (context, name, i, r) => {
    context.drawImage(
    tileset,
    tiles[`${name}`][0], tiles[`${name}`][1],
    16, 16,
    i*16, r*16,
    16, 16
    )
  };


  mapArray.map((row, r) => {
    row.map((tile, i) => {
      switch(tile) {
        case 't': 
          drawTile(context, 'tile', i, r)
          break;
        case 'w':
          drawTile(context, 'wreckTile', i, r)
          break;
        case 'a':
          drawTile(context, 'a', i, r)
          break;
      }
    })
    
  });

}

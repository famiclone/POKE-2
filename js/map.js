import { loadJSON, loadImage} from './loaders.js';

export function generateMap(context, level, tileset, config, callback) {
  let collisionObjList = [];

  for (let layer in level) {

        const tiles = {
          'tile': [32, 16],
          'wall': [64, 0],
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

        level[layer].map((row, r) => {
          row.map((tile, i) => {
            switch(tile) {
              case 't':
                drawTile(context, 'tile', i, r)
                break;
              case 'w':
                drawTile(context, 'wall', i, r)
                collisionObjList.push([`${16 * i}`, `${16 * r}`])
                break;
              case 'a':
                drawTile(context, 'a', i, r)
                break;
            }
          })
        });
        }
    }

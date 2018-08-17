import Person from './Person.js';
import NPC from './NPC.js';
import Player from './Player.js';
import Window from './Window.js';
import { loadJSON } from './loaders.js';
import generateMap from './map.js';

const canvas = document.getElementById('canvas'),
      context = canvas.getContext('2d');

loadJSON('./config.json')
  .then(config => {
    canvas.width = config.width;
    canvas.height = config.height;


const img = new Image();
img.src = './images/sprite.png';
//img.src = 'https://i.imgur.com/J16HYxl.png'

const tileset = new Image();
//tileset.src = 'https://i.imgur.com/5pyhjTP.png';
tileset.src = './images/tiles.png';


const player = new Player(context, 'Hero', img);

  



  function loop() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = '#ececec'
    context.fillRect(0, 0, 160, 144)
    
    generateMap(context, tileset, config)
    player.draw()
    requestAnimationFrame(loop);
  }

  loop()
  });



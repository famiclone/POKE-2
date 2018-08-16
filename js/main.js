import Person from './Person.js';
import NPC from './NPC.js';
import Player from './Player.js';
import Window from './Window.js';
import { loadJSON } from './loaders.js';
import generateMap from './map.js';

const canvas = document.getElementById('canvas'),
      context = canvas.getContext('2d');

loadJSON('../config.json')
  .then(config => {
    canvas.width = config.width;
    canvas.height = config.height;


    const img = new Image();
    img.src = './images/sprite.png';
    //img.src = 'https://i.imgur.com/J16HYxl.png'

    const tileset = new Image();
    //tileset.src = 'https://i.imgur.com/5pyhjTP.png';
    tileset.src = './images/tiles.png';

    // class Sprite {
    //   constructor(img, width, height, positions) {
    //     this.img = img;
    //     this.width = width;
    //     this.height = height;
    //     this.positions = positions;
    //   }
      
    //   draw(x, y) {
    //     context.drawImage(
    //       this.img,
    //       this.width,
    //       this.height,
    //     );
    //   }
    // };

  // const sprite = new Sprite(img, 8, 8, 8, 8);

  // sprite.draw(10, 10);





  const punk = new NPC(context, 'Barry', img,
    118, 2,
    96, 96
  )

  const player = new Player(
    context,
    'Hero',
    img,
    );

  document.addEventListener('keydown', event => {
    if (event.keyCode === 68) { // 'D'
      player.moveRight(); 
    };

    if (event.keyCode === 65) { // 'A'
      player.moveLeft();
    };

    if (event.keyCode === 87) { // 'W'
      player.moveUp()
    };

    if (event.keyCode === 83) { // 'S'
      player.moveDown()
    };

    if (event.keyCode === 13) { // 'Enter'
      console.log('MENU');

    }

  });



  function loop() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = '#ececec'
    context.fillRect(0, 0, 160, 144)
    
    generateMap(context, tileset, config)
   


    

    player.draw()

    punk.draw()

    


   

    requestAnimationFrame(loop);

  }

  loop()
  });



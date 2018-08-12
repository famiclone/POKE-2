import Person from './Person.js';
import NPC from './NPC.js';
import Player from './Player.js';
import Window from './Window.js';
import { loadJSON } from './loaders.js';

const canvas = document.getElementById('canvas'),
      context = canvas.getContext('2d');

loadJSON('../config.json')
  .then(config => {
    canvas.width = config.width;
    canvas.height = config.height;


    const img = new Image();
    img.src = 'https://i.imgur.com/J16HYxl.png';

    const tileset = new Image();
    tileset.src = 'https://i.imgur.com/5pyhjTP.png';

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
      punk.moveUp()
    };

    if (event.keyCode === 65) { // 'A'
      player.moveLeft();
      punk.moveRight()
    };

    if (event.keyCode === 87) { // 'W'
      player.moveUp()
      punk.moveDown()
    };

    if (event.keyCode === 83) { // 'S'
      player.moveDown()
      punk.moveLeft()
    };

    if (event.keyCode === 13) { // 'Enter'
      console.log('MENU');

    }

  });



  function loop() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = '#ececec'
    context.fillRect(0, 0, 160, 144)

    for(let x = 0; x < 160; x += config.tileSize) {
      for (let y = 0; y < 144; y += config.tileSize) {
        context.drawImage(
          tileset, 
          32, 32,
          16, 16,
          x, y,
          16, 16
        );
      }
  };


    

    player.draw()

    punk.draw()

    


   

    requestAnimationFrame(loop);

  }

  loop()
  });



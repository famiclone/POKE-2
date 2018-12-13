import Person from './Person.js';


export class Player extends Person{
	constructor(context, name, image) {
    super()
		this.name = name;
    this.image = image;
    this.context = context;

    this.speed = 16;

    this.control()
	}

  playerRight() {
    this.moveRight(); 
  }

  playerLeft() {
    this.moveLeft(); 
  }

  playerUp() {
    this.moveUp(); 
  }

  playerDown() {
    this.moveDown(); 
  }

  control() {
    document.addEventListener('keydown', event => {
      if (event.keyCode === 68) { // 'D'
        this.playerRight(); 
      };

      if (event.keyCode === 65) { // 'A'
        this.playerLeft();
      };

      if (event.keyCode === 87) { // 'W'
        this.playerUp()
      };

      if (event.keyCode === 83) { // 'S'
        this.playerDown()
      };


    });
  }




};

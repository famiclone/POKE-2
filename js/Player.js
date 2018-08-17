import Person from './Person.js';

class Player extends Person{
	constructor(context, name, image) {
    super()
		this.name = name;
    this.image = image;
    this.context = context;

    this.pos = {
      x: 0,
      y: 0
    },
    this.sprPos = {
      x: 0,
      y: 0
    }

    this.speed = 16;

    this.control()
	}

  control() {
    document.addEventListener('keydown', event => {
      if (event.keyCode === 68) { // 'D'
        this.moveRight(); 
      };

      if (event.keyCode === 65) { // 'A'
        this.moveLeft();
      };

      if (event.keyCode === 87) { // 'W'
        this.moveUp()
      };

      if (event.keyCode === 83) { // 'S'
        this.moveDown()
      };
    });
  }




};

export default Player;

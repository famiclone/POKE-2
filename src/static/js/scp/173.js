import Person from '../Person.js';

class SCP173 extends Person{
	constructor(context, name, image) {
    super()
		this.name = name;
    this.image = image;
    this.context = context;

    this.sprPos = {
      x: 0,
      y: 16
    }

    this.size = {
      w: 16,
      h: 32
    }

    this.speed = 16;

    this.move()
	}

  move() {
    //const nav = ['d', 'd', 'u', 'l', 'l', 'u'];

    //nav.map(dir => {
        //if (dir === 'd') {
          //this.moveDown()
        //}
        //if (dir === 'u') {
          //this.moveUp()
        //}
        //if (dir === 'l') {
          //this.moveLeft()
        //}
        //if (dir === 'r') {
          //this.moveRight()
        //}
    //});

    //this.moveDown()
  }

  control() {
    document.addEventListener('keydown', event => {
      
      if (event.keyCode === 39) { // 'D'
        this.moveRight(); 
      };

      if (event.keyCode === 37) { // 'A'
        this.moveLeft();
      };

      if (event.keyCode === 38) { // 'W'
        this.moveUp()
      };

      if (event.keyCode === 40) { // 'S'
        this.moveDown()
      };
    });
  }




};

export default SCP173;


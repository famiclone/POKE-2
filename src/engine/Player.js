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

  }




};

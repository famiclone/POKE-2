import Person from './Person.js';
//import Sound from './Sound.js';


export class Player extends Person{
	constructor(context, name, image) {
    super()
		this.name = name;
    this.image = image;
    this.context = context;
		//this.sound = new Sound();

    this.speed = 16;

    this.control()
	}

	playSoundStep() {
		this.sound.startConn();
		setTimeout(() => {
			this.sound.stopConn();
		}, 100)

	}

  playerRight() {
		//this.playSoundStep();
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

  playerActionA() {
		this.moveDown();
  }

  playerActionB() {
    this.moveDown(); 
  }

  control() {

  }




};

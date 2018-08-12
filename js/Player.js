import Person from './Person.js';

class Player extends Person{
	constructor(context, name, image) {
    super()
		this.name = name;
    this.image = image;
    this.context = context;

    this.posX = 0;
    this.posY = 0;
    this.posSprX = 4;
    this.posSprY = 2;
    this.speed = 16;
	}




};

export default Player;

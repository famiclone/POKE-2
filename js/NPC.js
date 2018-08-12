import Person from './Person.js';

export default class NPC extends Person {
	constructor(context, name, image, posX, posY, posSprX, posSprY) {
    super()
		this.name = name;
    this.image = image;
    this.context = context;

    this.posX = posX;
    this.posY = posY;
    this.posSprX = posSprX;
    this.posSprY = posSprY;

	}

  talk() {
    console.log(`Hi, my name is ${this.name}`) 
  }

  
};

export default class Person {
	constructor(context, name, image) {
		this.name = name;
    this.image = image;
    this.context = context;

    this.posX = 0;
    this.posY = 0;
    this.posSprX = 4;
    this.posSprY = 2;
    this.speed = 16;
	}

  draw() {
    this.context.drawImage(
      this.image,
      this.posSprX, this.posSprY,
      16, 16,
      this.posX, this.posY,
      16, 16
    )
  }

  moveRight() {
    console.log(`${this.name} move right`)
    this.posX += this.speed;
    this.posSprX = 54;
  }

  moveLeft() {
    console.log(`${this.name} move left`)
    this.posX -= this.speed;
    this.posSprX = 38;
  }

  moveUp() {
    console.log(`${this.name} move up`)
    this.posY -= this.speed;
    this.posSprX = 22
  }

  moveDown() {
    console.log(`${this.name} move down`)
    this.posY += this.speed;
    this.posSprX = 4
  }
};


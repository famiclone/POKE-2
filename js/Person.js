export default class Person {
	constructor(context, name, image) {
		this.name = name;
    this.image = image;
    this.context = context;

    this.pos = {
      x: 0,
      y: 0
    };

    this.sprPos = {
      x: 0,
      y: 0
    }

    this.speed = 16;
	}

  draw() {
    this.context.drawImage(
      this.image,
      this.sprPos.x, this.sprPos.y,
      16, 16,
      this.pos.x, this.pos.y,
      16, 16
    )
  }

  moveRight() {
    console.log(`${this.name} move right`)
    this.pos.x += this.speed / 2;
    this.sprPos.x = 48;
  }

  moveLeft() {
    console.log(`${this.name} move left`)
    this.pos.x -= this.speed / 2;
    this.sprPos.x = 32;
  }

  moveUp() {
    console.log(`${this.name} move up`)
    this.pos.y -= this.speed / 2;
    this.sprPos.x = 16;
  }

  moveDown() {
    console.log(`${this.name} move down`)
    this.pos.y += this.speed / 2;
    this.sprPos.x = 0
  }
};


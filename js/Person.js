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
    };

    this.size = {
      w: 16,
      h: 16
    }

    this.speed = 16;
	}

  draw(x, y) {
    this.context.drawImage(
      this.image,
      this.sprPos.x, this.sprPos.y,
      this.size.w, this.size.h,
      x || this.pos.x, y || this.pos.y,
      this.size.w, this.size.h
    )
  }

  moveRight(px) {
    console.log(`${this.name} move right`)
    this.pos.x += this.speed / 2;
    this.sprPos.x = 48;
  }

  moveLeft(px) {
    console.log(`${this.name} move left`)
    this.pos.x -= this.speed / 2;
    this.sprPos.x = 32;
  }

  moveUp(px) {
    console.log(`${this.name} move up`)
    this.pos.y -= this.speed / 2;
    this.sprPos.x = 16;
  }

  moveDown(px) {
    console.log(`${this.name} move down`)
    this.pos.y += this.speed / 2;
    this.sprPos.x = 0
  }
};


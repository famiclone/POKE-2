export default class Window {
  constructor(context, posX, posY, width, height, content) {
    this.context = context;
    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.height = height;
    this.content = content;
    
    this.draw()
  }

  draw() {
    context.fillStyle = '#ffffff';
    context.fillRect(
      this.posX, this.posY,
      this.width, this.width
    );
  }
};

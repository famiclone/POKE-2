class Controller {
  constructor(player) {
    this.player = player;
    this.btnUp;
    this.btnLeft;
    this.btnRight;
    this.btnDown;
    this.createTouchControls();
    this.touchControlsInit();
  }

  createTouchControls() {
    const controlsWrap = document.createElement('div');
    controlsWrap.className = 'controls__wrap';
    const controlsLRWrap = document.createElement('div');
    controlsLRWrap.className = 'controls__wrap-lr';


    this.btnUp = document.createElement('button');
    this.btnUp.textContent = 'Up';

    this.btnLeft = document.createElement('button');
    this.btnLeft.textContent = 'Left';
    this.btnRight = document.createElement('button');
    this.btnRight.textContent = 'Right';

    this.btnDown = document.createElement('button');
    this.btnDown.textContent = 'Down';

    controlsLRWrap.appendChild(this.btnLeft);
    controlsLRWrap.appendChild(this.btnRight);
    controlsWrap.appendChild(this.btnUp);
    controlsWrap.appendChild(controlsLRWrap);
    controlsWrap.appendChild(this.btnDown);
    document.querySelector('.controls').appendChild(controlsWrap);
  }

  touchControlsInit() {
    document.addEventListener('click', e => {
      switch(e.target) {
        case this.btnUp:
          this.player.playerUp();
          break;

        case this.btnLeft:
          this.player.playerLeft();
          break;

        case this.btnRight:
          this.player.playerRight();
          break;

        case this.btnDown:
          this.player.playerDown();
          break;
      }
      
    })
  }
}

export default Controller;

import ControllerUI from './ControllerUI.js';

class Controller {
	constructor(player) {
		this.controllerUI = new ControllerUI();
    this.player = player;
    this.btnUp = this.controllerUI.btnUp;
    this.btnLeft = this.controllerUI.btnLeft;
    this.btnRight = this.controllerUI.btnRight;
    this.btnDown = this.controllerUI.btnDown;
    this.btnStart = this.controllerUI.btnStart;
    this.btnSelect = this.controllerUI.btnSelect;
    this.btnA = this.controllerUI.btnA;
    this.btnB = this.controllerUI.btnB;

    this.controllerUI.createTouchControls();
    this.touchControlsInit();
  }

  
	pushUp() {
		this.player.playerUp();
	}

	pushLeft() {
		this.player.playerLeft();
	}

	pushRight() {
		this.player.playerRight();
	}

	pushDown() {
		this.player.playerDown();
	}

	pushA() {
		this.player.playerActionA();
		console.log('A')
	}

	pushB() {
		this.player.playerActionB();
		console.log('B')
	}

  touchControlsInit() {
    document.addEventListener('touchstart', e => {
      switch(e.target) {
        case this.controllerUI.btnUp:
					this.pushUp();
          break;

        case this.controllerUI.btnLeft:
					this.pushLeft();
          break;

				case this.controllerUI.btnRight:
					this.pushRight();
					break;

				case this.controllerUI.btnDown:
					this.pushDown();
					break;

				case this.controllerUI.btnA:
					this.pushA();
					break;

				case this.controllerUI.btnB:
					this.pushB();
					break;
			}

		})

		document.addEventListener('keydown', e => {
			switch(e.keyCode) {
        case 87:
					this.pushUp();
          break;

        case 65:
					this.pushLeft();
          break;

				case 68:
					this.pushRight();
					break;

				case 83:
					this.pushDown();
					break;
			}


		});

	}
}


export default Controller;

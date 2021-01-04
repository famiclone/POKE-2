import ControllerUI from './ControllerUI.js';

class Controller {
	constructor(player) {
		this.controller = new ControllerUI();
    this.player = player;
    this.btnUp;
    this.btnLeft;
    this.btnRight;
    this.btnDown;
    this.btnStart;
    this.btnSelect;
    this.btnA;
    this.btnB;

    this.controller.createTouchControls();
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
		//this.playerActionA();
		console.log('A')
	}

	pushB() {
		//this.playerActionB();
		console.log('B')
	}

  touchControlsInit() {
    document.addEventListener('touchstart', e => {
      switch(e.target) {
        case this.controller.btnUp:
					this.pushUp();
          break;

        case this.controller.btnLeft:
					this.pushLeft();
          break;

				case this.controller.btnRight:
					this.pushRight();
					break;

				case this.controller.btnDown:
					this.pushDown();
					break;

				case this.controller.btnA:
					this.pushA();
					break;

				case this.controller.btnB:
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

class Controller {
  constructor(player) {
    this.player = player;
    this.btnUp;
    this.btnLeft;
    this.btnRight;
    this.btnDown;
    this.btnStart;
    this.btnSelect;
    this.btnA;
    this.btnB;

    this.createTouchControls();
    this.touchControlsInit();
  }

  createTouchControls() {
    // Main controller wrapper
    const controlsWrap = document.createElement('div');
    controlsWrap.className = 'controls__wrap';
		
		// Wrapper for left/right buttons
    const controlsLRWrap = document.createElement('div');
    controlsLRWrap.className = 'controls__wrap-lr';

		// Wrapper for D-pad
    const controlsDpad = document.createElement('div');
    controlsDpad.className = 'controls__wrap-dpad';

		// Wrapper for A/B buttons
    const controlsABWrap = document.createElement('div');
    controlsABWrap.className = 'controls__wrap-ab';


    this.btnUp = document.createElement('button');
    this.btnUp.className = 'controls__btn controls__btn--up';

    this.btnLeft = document.createElement('button');
    this.btnLeft.className = 'controls__btn controls__btn--left';
    this.btnRight = document.createElement('button');
    this.btnRight.className = 'controls__btn controls__btn--right';

    this.btnDown = document.createElement('button');
    this.btnDown.className = 'controls__btn controls__btn--down';

    this.btnA = document.createElement('button');
    this.btnA.className = 'controls__btn controls__btn--a';
    this.btnB = document.createElement('button');
    this.btnB.className = 'controls__btn controls__btn--b';

    controlsABWrap.appendChild(this.btnA);
    controlsABWrap.appendChild(this.btnB);

    controlsLRWrap.appendChild(this.btnLeft);
    controlsLRWrap.appendChild(this.btnRight);

		controlsDpad.appendChild(this.btnUp);
    controlsDpad.appendChild(controlsLRWrap);
    controlsDpad.appendChild(this.btnDown);
    
   	controlsWrap.appendChild(controlsDpad);
		controlsWrap.appendChild(controlsABWrap);


    document.querySelector('.controls').appendChild(controlsWrap);
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

  touchControlsInit() {
    document.addEventListener('click', e => {
      switch(e.target) {
        case this.btnUp:
					this.pushUp();
          break;

        case this.btnLeft:
					this.pushLeft();
          break;

				case this.btnRight:
					this.pushRight();
					break;

				case this.btnDown:
					this.pushDown();
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

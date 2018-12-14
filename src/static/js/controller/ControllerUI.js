class ControllerUI {
	constructor() {
    this.btnUp;
    this.btnLeft;
    this.btnRight;
    this.btnDown;
    this.btnStart;
    this.btnSelect;
    this.btnA;
    this.btnB;
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
	
	// Wrapper for select/start buttons
	const controlsStartWrap = document.createElement('div');
	controlsStartWrap.className = 'controls__wrap-start';


	this.btnUp = document.createElement('div');
	this.btnUp.className = 'controls__btn controls__btn--up';

	this.btnLeft = document.createElement('div');
	this.btnLeft.className = 'controls__btn controls__btn--left';
	this.btnRight = document.createElement('div');
	this.btnRight.className = 'controls__btn controls__btn--right';

	this.btnDown = document.createElement('div');
	this.btnDown.className = 'controls__btn controls__btn--down';

	this.btnA = document.createElement('div');
	this.btnA.className = 'controls__btn controls__btn--a';
	this.btnB = document.createElement('div');
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
	controlsWrap.appendChild(controlsStartWrap);


	document.querySelector('.controls').appendChild(controlsWrap);
}

}

export default ControllerUI;

class Sound {
	constructor() {
  	this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    
    this.osc = this.ctx.createOscillator();
    this.osc.type = 'square';
    this.osc.frequency.setValueAtTime(120, this.ctx.currentTime);
  }
  
  startConn() {
  	this.osc.connect(this.ctx.destination);
		this.osc.start();
  }
  
  stopConn() {
		this.osc.disconnect(this.ctx.destination);
  }
  
  
}



export default Sound;

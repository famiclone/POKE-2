class Screen {
	constructor(w, h) {
		this.canvas = document.getElementById('canvas');
		this.context = canvas.getContext('2d');
		this.canvas.width = w;
		this.canvas.height = h;
		console.log(w, h)
	}
}

export default Screen;

import { loadJSON } from './loaders.js';
import ROM from '../roms/test/index.js';
import Screen from './Screen.js';
import Controller from './controller/Controller.js';

class Console {
	constructor(config) {
		this.config = config;
		this.screen;
		this.loadConfig();
		this.rom;
	}

	loadConfig() {
		loadJSON(this.config)
			.then(config => {
				this.screen = new Screen(config.width, config.height);
				this.rom  = new ROM(this.screen);
				this.controller = new Controller(this.rom.player);
				console.log(this.rom)
			})
	}
}

export default Console;


//import Person from './Person.js';
//import NPC from './NPC.js';
//import { Player } from './Player.js';
//import Window from './Window.js';
//import { loadJSON } from './loaders.js';
//import { generateMap } from './map.js';
//import Controller from './controller/Controller.js';


//import SCP173 from './scp/173.js'

//const canvas = document.getElementById('canvas'),
      //context = canvas.getContext('2d');


//let area = 0;

//const loadBIOS = () => {

//};


////const controller = new Controller();
////function loop() {

	////loadBIOS();

	////requestAnimationFrame(loop);
////}

////loop();

//loadJSON('./static/js/config.json')
	//.then(config => {
		//canvas.width = config.width;
		//canvas.height = config.height;

		//loadJSON('./static/js/levels/1.json')
		//.then(loc => {
			//const level = loc;

		//const img = new Image();
		//img.src = './static/images/sprite.png';
		////img.src = 'https://i.imgur.com/J16HYxl.png'

		//const tileset = new Image();
		////tileset.src = 'https://i.imgur.com/5pyhjTP.png';
		//tileset.src = './static/images/tiles.png';

		//const player = new Player(context, 'Hero', img);
		//const scp173 = new SCP173(context, 'SCP-173', img);
		//const controller = new Controller(player);
	 
		//function loop() {
			//if(player.pos.x > canvas.width) {
				//area = area >= loc.level.length - 1 ? 0 : area + 1;
				//player.pos.x = 0;
			//}
			
			//if(player.pos.x < 0) {
				//area = area <= 0 ? loc.level.length - 1 : area - 1;
				//player.pos.x = canvas.width;
			//}
			//context.clearRect(0, 0, canvas.width, canvas.height);

			//generateMap(context, level, tileset, config, area)
			////scp173.draw(32, 48)
			//player.draw()

			//requestAnimationFrame(loop);
		//}

		//loop()
		//});
//});

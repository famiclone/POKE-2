import Person from './Person.js';
import NPC from './NPC.js';
import { Player } from './Player.js';
//import Window from './Window.js';
import { generateMap } from './map.js';
//import Controller from './controller/Controller.js';


//import SCP173 from './scp/173.js'

let area = 0;

function loadJSON(url) {
  return fetch(url)
    .then(response => response.json())
};

class ROM {
	constructor(screen) {
		this.screen = screen;
		this.loadLevel();
	}

	loadMenu() {

	}

	loadLevel() {
		loadJSON('./static/js/levels/1.json')
			.then(loc => {
				const level = loc;


				const img = new Image();
				img.src = './static/images/sprite.png';
				//img.src = 'https://i.imgur.com/J16HYxl.png'

				const tileset = new Image();
				//tileset.src = 'https://i.imgur.com/5pyhjTP.png';
				tileset.src = './static/images/tiles.png';

				this.player = new Player(this.screen.context, 'Hero', img);
				//const scp173 = new SCP173(this.screen.context, 'SCP-173', img);
				//const controller = new Controller(player);

				const loop = () => {
					if(this.player.pos.x > canvas.width) {
						area = area >= loc.level.length - 1 ? 0 : area + 1;
						this.player.pos.x = 0;
					}

					if(this.player.pos.x < 0) {
						area = area <= 0 ? loc.level.length - 1 : area - 1;
						this.player.pos.x = this.screen.width;
					}
					this.screen.context.clearRect(0, 0, this.screen.width, this.screen.height);

					generateMap(this.screen.context, level, tileset, area)
					//scp173.draw(32, 48)
					this.player.draw()

					requestAnimationFrame(loop);
				}

				loop()
			});
	}

}

export default ROM;

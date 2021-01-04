import Person from './engine/Person.js'
import NPC from './engine/NPC.js'
import { Player } from './engine/Player.js'
import Window from './engine/Window.js'
import { loadJSON } from './engine/loaders.js'
import { generateMap } from './engine/map.js'
import Controller from './engine/controller/Controller.js'

import SCP173 from './engine/scp/173.js'

import config from './config.json'
import level from './levels/1.json'

import sprites from './images/sprite.png'
import tiles from './images/tiles.png'

const canvas = document.getElementById('canvas'),
  context = canvas.getContext('2d')

let area = 0

const loadBIOS = () => {}

//const controller = new Controller();
//function loop() {

//loadBIOS();

//requestAnimationFrame(loop);
//}

//loop();

console.log(config)
canvas.width = config.width
canvas.height = config.height

const img = new Image()
img.src = sprites
//img.src = 'https://i.imgur.com/J16HYxl.png'

const tileset = new Image()
//tileset.src = 'https://i.imgur.com/5pyhjTP.png';
tileset.src = tiles

const player = new Player(context, 'Hero', img)
const scp173 = new SCP173(context, 'SCP-173', img)
const controller = new Controller(player)

function loop() {
  if (player.pos.x > canvas.width) {
    area = area >= level.level.length - 1 ? 0 : area + 1
    player.pos.x = 0
  }

  if (player.pos.x < 0) {
    area = area <= 0 ? level.level.length - 1 : area - 1
    player.pos.x = canvas.width
  }
  context.clearRect(0, 0, canvas.width, canvas.height)

  generateMap(context, level, tileset, config, area)
  //scp173.draw(32, 48)
  player.draw()

  requestAnimationFrame(loop)
}

loop()

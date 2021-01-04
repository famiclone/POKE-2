// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"static/js/Person.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Person = /*#__PURE__*/function () {
  function Person(context, name, image) {
    _classCallCheck(this, Person);

    this.name = name;
    this.image = image;
    this.context = context;
    this.pos = {
      x: 0,
      y: 0
    };
    this.sprPos = {
      x: 0,
      y: 0
    };
    this.size = {
      w: 16,
      h: 16
    };
    this.speed = 16;
  }

  _createClass(Person, [{
    key: "draw",
    value: function draw(x, y) {
      this.context.drawImage(this.image, this.sprPos.x, this.sprPos.y, this.size.w, this.size.h, x || this.pos.x, y || this.pos.y, this.size.w, this.size.h);
    }
  }, {
    key: "moveRight",
    value: function moveRight(px) {
      console.log("".concat(this.name, " move right"));
      this.pos.x += this.speed / 2;
      this.sprPos.x = 48;
    }
  }, {
    key: "moveLeft",
    value: function moveLeft(px) {
      console.log("".concat(this.name, " move left"));
      this.pos.x -= this.speed / 2;
      this.sprPos.x = 32;
    }
  }, {
    key: "moveUp",
    value: function moveUp(px) {
      console.log("".concat(this.name, " move up"));
      this.pos.y -= this.speed / 2;
      this.sprPos.x = 16;
    }
  }, {
    key: "moveDown",
    value: function moveDown(px) {
      console.log("".concat(this.name, " move down"));
      this.pos.y += this.speed / 2;
      this.sprPos.x = 0;
    }
  }]);

  return Person;
}();

exports.default = Person;
;
},{}],"static/js/Player.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Player = void 0;

var _Person2 = _interopRequireDefault(require("./Person.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Player = /*#__PURE__*/function (_Person) {
  _inherits(Player, _Person);

  var _super = _createSuper(Player);

  function Player(context, name, image) {
    var _this;

    _classCallCheck(this, Player);

    _this = _super.call(this);
    _this.name = name;
    _this.image = image;
    _this.context = context;
    _this.speed = 16;

    _this.control();

    return _this;
  }

  _createClass(Player, [{
    key: "playerRight",
    value: function playerRight() {
      this.moveRight();
    }
  }, {
    key: "playerLeft",
    value: function playerLeft() {
      this.moveLeft();
    }
  }, {
    key: "playerUp",
    value: function playerUp() {
      this.moveUp();
    }
  }, {
    key: "playerDown",
    value: function playerDown() {
      this.moveDown();
    }
  }, {
    key: "control",
    value: function control() {}
  }]);

  return Player;
}(_Person2.default);

exports.Player = Player;
;
},{"./Person.js":"static/js/Person.js"}],"static/js/loaders.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadJSON = loadJSON;
exports.loadPokemonInfo = loadPokemonInfo;
exports.loadImage = loadImage;

function loadJSON(url) {
  return fetch(url).then(function (response) {
    return response.json();
  });
}

;

function loadPokemonInfo(name) {
  return fetch("../pokemon/".concat(name, ".json")).then(function (response) {
    return response.json();
  });
}

;

function loadImage(url) {
  return fetch(url).then(function (image) {
    var img = new Image();
    img.src = image.src;
  });
}

;
},{}],"static/js/map.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateMap = generateMap;

var _loaders = require("./loaders.js");

function generateMap(context, level, tileset, config, area) {
  var collisionObjList = [];

  var _loop = function _loop(layer) {
    var tiles = {
      'tile': [32, 16],
      'wall': [64, 0],
      'wreckTile': [16, 0],
      'a': [16, 16]
    };

    var drawTile = function drawTile(context, name, i, r) {
      context.drawImage(tileset, tiles["".concat(name)][0], tiles["".concat(name)][1], 16, 16, i * 16, r * 16, 16, 16);
    };

    if (level.level.length <= area) {
      area = 0;
    }

    level[area].map(function (row, r) {
      row.map(function (tile, i) {
        switch (tile) {
          case 't':
            drawTile(context, 'tile', i, r);
            break;

          case 'w':
            drawTile(context, 'wall', i, r);
            collisionObjList.push(["".concat(16 * i), "".concat(16 * r)]);
            break;

          case 'a':
            drawTile(context, 'a', i, r);
            break;
        }
      });
    });
  };

  for (var layer in level) {
    _loop(layer);
  }
}
},{"./loaders.js":"static/js/loaders.js"}],"static/js/controller/ControllerUI.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ControllerUI = /*#__PURE__*/function () {
  function ControllerUI() {
    _classCallCheck(this, ControllerUI);
  }

  _createClass(ControllerUI, [{
    key: "createTouchControls",
    value: function createTouchControls() {
      // Main controller wrapper
      var controlsWrap = document.createElement('div');
      controlsWrap.className = 'controls__wrap'; // Wrapper for left/right buttons

      var controlsLRWrap = document.createElement('div');
      controlsLRWrap.className = 'controls__wrap-lr'; // Wrapper for D-pad

      var controlsDpad = document.createElement('div');
      controlsDpad.className = 'controls__wrap-dpad'; // Wrapper for A/B buttons

      var controlsABWrap = document.createElement('div');
      controlsABWrap.className = 'controls__wrap-ab';
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
      document.querySelector('.controls').appendChild(controlsWrap);
    }
  }]);

  return ControllerUI;
}();

var _default = ControllerUI;
exports.default = _default;
},{}],"static/js/controller/Controller.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ControllerUI = _interopRequireDefault(require("./ControllerUI.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Controller = /*#__PURE__*/function () {
  function Controller(player) {
    _classCallCheck(this, Controller);

    this.controller = new _ControllerUI.default();
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

  _createClass(Controller, [{
    key: "pushUp",
    value: function pushUp() {
      this.player.playerUp();
    }
  }, {
    key: "pushLeft",
    value: function pushLeft() {
      this.player.playerLeft();
    }
  }, {
    key: "pushRight",
    value: function pushRight() {
      this.player.playerRight();
    }
  }, {
    key: "pushDown",
    value: function pushDown() {
      this.player.playerDown();
    }
  }, {
    key: "pushA",
    value: function pushA() {
      //this.playerActionA();
      console.log('A');
    }
  }, {
    key: "pushB",
    value: function pushB() {
      //this.playerActionB();
      console.log('B');
    }
  }, {
    key: "touchControlsInit",
    value: function touchControlsInit() {
      var _this = this;

      document.addEventListener('touchstart', function (e) {
        switch (e.target) {
          case _this.controller.btnUp:
            _this.pushUp();

            break;

          case _this.controller.btnLeft:
            _this.pushLeft();

            break;

          case _this.controller.btnRight:
            _this.pushRight();

            break;

          case _this.controller.btnDown:
            _this.pushDown();

            break;

          case _this.controller.btnA:
            _this.pushA();

            break;

          case _this.controller.btnB:
            _this.pushB();

            break;
        }
      });
      document.addEventListener('keydown', function (e) {
        switch (e.keyCode) {
          case 87:
            _this.pushUp();

            break;

          case 65:
            _this.pushLeft();

            break;

          case 68:
            _this.pushRight();

            break;

          case 83:
            _this.pushDown();

            break;
        }
      });
    }
  }]);

  return Controller;
}();

var _default = Controller;
exports.default = _default;
},{"./ControllerUI.js":"static/js/controller/ControllerUI.js"}],"static/js/scp/173.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Person2 = _interopRequireDefault(require("../Person.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var SCP173 = /*#__PURE__*/function (_Person) {
  _inherits(SCP173, _Person);

  var _super = _createSuper(SCP173);

  function SCP173(context, name, image) {
    var _this;

    _classCallCheck(this, SCP173);

    _this = _super.call(this);
    _this.name = name;
    _this.image = image;
    _this.context = context;
    _this.sprPos = {
      x: 0,
      y: 16
    };
    _this.size = {
      w: 16,
      h: 32
    };
    _this.speed = 16;

    _this.move();

    return _this;
  }

  _createClass(SCP173, [{
    key: "move",
    value: function move() {//const nav = ['d', 'd', 'u', 'l', 'l', 'u'];
      //nav.map(dir => {
      //if (dir === 'd') {
      //this.moveDown()
      //}
      //if (dir === 'u') {
      //this.moveUp()
      //}
      //if (dir === 'l') {
      //this.moveLeft()
      //}
      //if (dir === 'r') {
      //this.moveRight()
      //}
      //});
      //this.moveDown()
    }
  }, {
    key: "control",
    value: function control() {
      var _this2 = this;

      document.addEventListener('keydown', function (event) {
        if (event.keyCode === 39) {
          // 'D'
          _this2.moveRight();
        }

        ;

        if (event.keyCode === 37) {
          // 'A'
          _this2.moveLeft();
        }

        ;

        if (event.keyCode === 38) {
          // 'W'
          _this2.moveUp();
        }

        ;

        if (event.keyCode === 40) {
          // 'S'
          _this2.moveDown();
        }

        ;
      });
    }
  }]);

  return SCP173;
}(_Person2.default);

;
var _default = SCP173;
exports.default = _default;
},{"../Person.js":"static/js/Person.js"}],"static/js/index.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Player_js_1 = require("./Player.js");

var loaders_js_1 = require("./loaders.js");

var map_js_1 = require("./map.js");

var Controller_js_1 = __importDefault(require("./controller/Controller.js"));

var _173_js_1 = __importDefault(require("./scp/173.js"));

var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d');
var area = 0;

var loadBIOS = function loadBIOS() {}; //const controller = new Controller();
//function loop() {
//loadBIOS();
//requestAnimationFrame(loop);
//}
//loop();


loaders_js_1.loadJSON('./static/js/config.json').then(function (config) {
  canvas.width = config.width;
  canvas.height = config.height;
  loaders_js_1.loadJSON('./static/js/levels/1.json').then(function (loc) {
    var level = loc;
    var img = new Image();
    img.src = './static/images/sprite.png'; //img.src = 'https://i.imgur.com/J16HYxl.png'

    var tileset = new Image(); //tileset.src = 'https://i.imgur.com/5pyhjTP.png';

    tileset.src = './static/images/tiles.png';
    var player = new Player_js_1.Player(context, 'Hero', img);
    var scp173 = new _173_js_1.default(context, 'SCP-173', img);
    var controller = new Controller_js_1.default(player);

    function loop() {
      if (player.pos.x > canvas.width) {
        area = area >= loc.level.length - 1 ? 0 : area + 1;
        player.pos.x = 0;
      }

      if (player.pos.x < 0) {
        area = area <= 0 ? loc.level.length - 1 : area - 1;
        player.pos.x = canvas.width;
      }

      context.clearRect(0, 0, canvas.width, canvas.height);
      map_js_1.generateMap(context, level, tileset, config, area); //scp173.draw(32, 48)

      player.draw();
      requestAnimationFrame(loop);
    }

    loop();
  });
});
},{"./Player.js":"static/js/Player.js","./loaders.js":"static/js/loaders.js","./map.js":"static/js/map.js","./controller/Controller.js":"static/js/controller/Controller.js","./scp/173.js":"static/js/scp/173.js"}],"../node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54505" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel/src/builtins/hmr-runtime.js","static/js/index.ts"], null)
//# sourceMappingURL=/js.60d98c2f.js.map
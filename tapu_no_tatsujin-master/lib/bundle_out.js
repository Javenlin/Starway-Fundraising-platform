/******/ (function(modules) { 
/******/  //webpack 是一个现代 JavaScript 应用程序的静态模块打包器
/******/  //(static module bundler)。在 webpack 处理应用程序时，
/******/  //它会在内部创建一个依赖图(dependency graph)，
/******/  //用于映射到项目需要的每个模块，
/******/  //然后将所有这些依赖生成到一个或多个bundle。
/******/
/******/ //Node.js 引入了模块（Module）概念，
/******/ //一个模块可以通过module.exports 或 exports 将函数、变量等导出，
/******/ //以使其它 JavaScript 脚本通过require() 函数引入并使用。　
/******/  // webpackBootstrap 
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict"; 
//use strict 
//為了讓編寫「具穩定性的 JavaScript 更容易」，
//在不穩定的語法或妨礙最佳化的語意都會跳出警告，讓開發者避開這些寫法。

/* global createjs */

const startMessages = () => {
  let chooseLevel = new createjs.Text("選擇歌曲", "40px 微軟正黑體", "#ffffff");
  let beginPlay = new createjs.Text("來開始遊戲", "40px 微軟正黑體", "#ffffff");
  chooseLevel.x = 180;
  chooseLevel.y = 220;
  beginPlay.x = 160;
  beginPlay.y = 290;
  if(window.screen.width<414){
    //手機
     chooseLevel.x -= 70;
     beginPlay.x -= 70;
   };
  let chooseLevelFill = chooseLevel.clone();
  chooseLevelFill.outline = false;
  chooseLevelFill.color = "white";
  let beginPlayFill = beginPlay.clone();
  beginPlayFill.outline = false;
  beginPlayFill.color = "white";
  return (
    [chooseLevel, beginPlay, chooseLevelFill, beginPlayFill]
  );
};
/* harmony export (immutable) */ __webpack_exports__["h"] = startMessages;



const TaikoRed = (x=175, y= 525) => {
  let tapRed = new createjs.Bitmap("tapu_no_tatsujin-master/assets/images/r1.png");
  tapRed.x = x;
  tapRed.y = y;
  tapRed.scaleX = tapRed.scaleY = 0.5;
  return (
    tapRed
  );
};
/* harmony export (immutable) */ __webpack_exports__["d"] = TaikoRed;


const TaikoNew = (x=175, y= 525) => {
  let tapRed = new createjs.Bitmap("tapu_no_tatsujin-master/assets/images/r2.png");
  tapRed.x = x;
  tapRed.y = y;
  tapRed.scaleX = tapRed.scaleY = 0.5;
  return (
    tapRed
  );
};
/* harmony export (immutable) */ __webpack_exports__["n"] = TaikoNew;


const TaikoBlue = (x=55, y=525) => {
  let tapBlue = new createjs.Bitmap("tapu_no_tatsujin-master/assets/images/r3.png");
  tapBlue.x = x;
  tapBlue.y = y;
  tapBlue.scaleX = tapBlue.scaleY = 0.5;
  return (
    tapBlue
  );
};
/* harmony export (immutable) */ __webpack_exports__["b"] = TaikoBlue;


const TaikoGold = (x=45, y=507) => {//y=515
  let tapGold = new createjs.Bitmap("tapu_no_tatsujin-master/assets/images/r4.png");
  tapGold.x = x;
  tapGold.y = y;
  tapGold.scaleX = tapGold.scaleY = 0.7;
  return (
    tapGold
  );
};
/* harmony export (immutable) */ __webpack_exports__["c"] = TaikoGold;


const TaikoBlack = (x=50) => {
  let tapBlack = new createjs.Bitmap("tapu_no_tatsujin-master/assets/images/ra.png");
  tapBlack.x = x;
  tapBlack.y = 510;
  // if(window.screen.width>414)
  tapBlack.scaleX = tapBlack.scaleY = 0.9;
  // else
  // tapBlack.scaleX = tapBlack.scaleY = 0.4;

  return (
    tapBlack
  );
};
/* harmony export (immutable) */ __webpack_exports__["a"] = TaikoBlack;


const Fireworks = (x=250, y=430) => {
  let fireworks = new createjs.Bitmap("tapu_no_tatsujin-master/assets/images/fireworksBonus.png");
  fireworks.x = x;
  fireworks.y = y;
  fireworks.scaleX = fireworks.scaleY = 1.5;
  return (
    fireworks
  );
};
/* unused harmony export Fireworks */ __webpack_exports__["z1"] = Fireworks;


const FireworkGradients = (x=260, y=490) => {
  let fireworks = new createjs.Bitmap("tapu_no_tatsujin-master/assets/images/fireworksReal.png");
  fireworks.x = x;
  fireworks.y = y;
  fireworks.scaleX = fireworks.scaleY = 1.5;
  return (
    fireworks
  );
};
/* unused harmony export FireworkGradients */ __webpack_exports__["z2"] = FireworkGradients;



const FireworkWhite = (x=260, y=490) => {
  let fireworks = new createjs.Bitmap("tapu_no_tatsujin-master/assets/images/fireworksBonus.png");
  fireworks.x = x;
  fireworks.y = y;
  fireworks.scaleX = fireworks.scaleY = 1.5;
  return (
    fireworks
  );
};
/* unused harmony export FireworkGradients */ __webpack_exports__["z3"] = FireworkWhite;


const hitMessages = (x, y) => {
  const messageContainer = ["Great!", "Fantastic!", "Amazing!",
      "Good!", "Perfect!", "Hit!"];
  let messages = messageContainer[Math.floor( Math.random()
      * messageContainer.length)];
  let text = new createjs.Text();
  text.font = "20px 微軟正黑體";
  text.color = "white";
  text.text = messages;
  text.outline = 5;
  text.x = Math.floor(Math.random() * (y - x))+ x;
  text.y = Math.floor(Math.random() * (500-435)) + 435;
  let textFill = text.clone();
  textFill.outline = false;
  textFill.color = "red";
  return (
    [text, textFill]
  );
};
/* harmony export (immutable) */ __webpack_exports__["e"] = hitMessages;


const missMessages = (x, y) => {
  const messageContainer = ["Missed!", "Not Even Close!",
      "Try Again!"];
  let messages = messageContainer[Math.floor( Math.random()
      * messageContainer.length)];
  let text = new createjs.Text();
  text.font = "20px 微軟正黑體";
  text.color = "white";
  text.text = messages;
  text.outline = 4;
  text.x = Math.floor(Math.random() * (y - x))+ x;
  text.y = Math.floor(Math.random() * (500-435)) + 435;
  let textFill = text.clone();
  textFill.outline = false;
  textFill.color = "blue";
  return (
    [text, textFill]
  );
};
/* harmony export (immutable) */ __webpack_exports__["f"] = missMessages;


const showScore = (score) => {
  let gameOver = new createjs.Text("遊戲結束", "40px 微軟正黑體", "white");
    gameOver.x = 175;//75
    gameOver.y = 145;//200
  let yourScore = new createjs.Text("您的分數是:", "40px 微軟正黑體", "white");
    yourScore.x = 150;//65
    yourScore.y = 200;//255
  let finalScore = new createjs.Text(score+" 分", "40px 微軟正黑體", "white");
    finalScore.x = 205;//140
    finalScore.y = 255;//310
    if(window.screen.width<414){
      //手機
       gameOver.x -= 70;
       yourScore.x -= 70;
       finalScore.x -= 70;
     };

    return (
      [gameOver, yourScore, finalScore]
    );
};
/* harmony export (immutable) */ __webpack_exports__["g"] = showScore;


/***/
/* 第1區 - 連結遊戲按鈕 */
/***/
/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tap__ = __webpack_require__(0);
/* global createjs */


//test


document.addEventListener("DOMContentLoaded", function() {
  const canvas = document.getElementById('gameCanvas');
  const stage = new createjs.Stage(canvas); //similar to getElementById
  const view = new __WEBPACK_IMPORTED_MODULE_0__view__["a" /* default */](stage);
  const game = new __WEBPACK_IMPORTED_MODULE_1__game__["a" /* default */](stage);

  view.render();
  stage.update();

  // 當畫面變動時，進行舞台重新布局
  window.onresize=function(){
         changeDivWidth();
      }
  function changeDivWidth(){       
    // var h = document.documentElement.clientWidth;//获取页面可见高度
    // document.getElementById("div_ov_y").style.height=h-140+"px"
    if(window.screen.width>414){
      window.location.reload();
    }

    if(window.screen.width<414){
      window.location.reload();
    }
  }



  function controlKeys (e) {
    // e.preventDefault();

    switch (e.keyCode){
      case 88:
        game.tapRed();
        break;
      //--EXTRA
      case 32:
        game.tapNew();
        break;
      //--
      case 90:
        game.tapBlueLeft();
        break;
      case 67:
        game.tapBlueRight();
        break;
    }
  } // end controlKeys
  
  document.addEventListener("keydown", controlKeys, false);
 

 
  document.getElementById("level-beginner")
          .addEventListener("click", () => {
            game.play("beginner");
          });

  document.getElementById("level-normal")
          .addEventListener("click", () => {
            game.play("normal");
          });

  document.getElementById("level-master")
          .addEventListener("click", () => {
            game.play("master");
          });

  document.getElementById("stop")
          .addEventListener("click", () => {
            game.stop();
          });

  document.getElementById("reset")
          .addEventListener("click", () => {
             game.reset();
            game.regame();
            game.stop();           
          });
 
 // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
 //觸控式按鈕
//--EXTRA
document.getElementById("btnRed")
         .addEventListener("click", () => { 
           game.tapRed();
         });
document.getElementById("btnNew")
         .addEventListener("click", () => { 
           game.tapNew();
         });
document.getElementById("btnLeft")
         .addEventListener("click", () => { 
           game.tapBlueLeft();
         });
document.getElementById("btnRight")
         .addEventListener("click", () => { 
           game.tapBlueRight();
         });
//--
}); // end AddeventListener


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tap__ = __webpack_require__(0);
/* global createjs */


class View {
  constructor(stage) {
    this.stage = stage;
  }

  start() {
  let [chooseLevel, beginPlay, chooseLevelFill, beginPlayFill] = Object(__WEBPACK_IMPORTED_MODULE_0__tap__["h" /* startMessages */])();
  this.stage.addChild(chooseLevel, beginPlay, chooseLevelFill, beginPlayFill);
  this.stage.update;
  document.addEventListener("click", () => {
    this.stage.removeChild(chooseLevel, beginPlay, chooseLevelFill, beginPlayFill);
  });
}

  render () {
    // const taikoBlackLeft = Object(__WEBPACK_IMPORTED_MODULE_0__tap__["a" /* TaikoBlack */])();
    // const taikoBlackMid = Object(__WEBPACK_IMPORTED_MODULE_0__tap__["a" /* TaikoBlack */])(155);
    // const taikoBlackNew = Object(__WEBPACK_IMPORTED_MODULE_0__tap__["a" /* TaikoBlack */])(275);
    // const taikoBlackRight = Object(__WEBPACK_IMPORTED_MODULE_0__tap__["a" /* TaikoBlack */])(395);
    var taikoBlackLeft,taikoBlackMid,taikoBlackNew,taikoBlackRight;
    if(window.screen.width>414){
    // 桌機
     taikoBlackLeft = Object(__WEBPACK_IMPORTED_MODULE_0__tap__["a" /* TaikoBlack */])();
     taikoBlackMid = Object(__WEBPACK_IMPORTED_MODULE_0__tap__["a" /* TaikoBlack */])(170);
     taikoBlackNew = Object(__WEBPACK_IMPORTED_MODULE_0__tap__["a" /* TaikoBlack */])(285);
     taikoBlackRight = Object(__WEBPACK_IMPORTED_MODULE_0__tap__["a" /* TaikoBlack */])(400);
    

    this.start();
    let stage = this.stage;
    taikoBlackMid.image.onload = function() {
      stage.update();
    }; // image won't load unless you call this onload function

    this.stage.addChild(taikoBlackMid); // must call if you want to put something.
    this.stage.addChild(taikoBlackNew); // must call if you want to put something.
    this.stage.addChild(taikoBlackRight); // must call if you want to put something.
    this.stage.addChild(taikoBlackLeft); // must call if you want to put something.

    }
    // else{
    // 手機
     // taikoBlackLeft = Object(__WEBPACK_IMPORTED_MODULE_0__tap__["a" /* TaikoBlack */])(12);
     // taikoBlackMid = Object(__WEBPACK_IMPORTED_MODULE_0__tap__["a" /* TaikoBlack */])(107);
     // taikoBlackNew = Object(__WEBPACK_IMPORTED_MODULE_0__tap__["a" /* TaikoBlack */])(202);
     // taikoBlackRight = Object(__WEBPACK_IMPORTED_MODULE_0__tap__["a" /* TaikoBlack */])(295);
    // }

    this.stage.update();
  } //end render
} //end class viewPort

/* harmony default export */ __webpack_exports__["a"] = (View);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sounds__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tap__ = __webpack_require__(0);
/* global createjs */


var levelGame = "";
var stopGame = false;
var regame = false ;
class Game {
  constructor(stage){
    this.stage = stage;
    this.speed = 100;
    this.pause = true;
    this.score = 0;
    this.combo = 0;
    this.level = null;
    this.onGame = false;
    this.missed = 30;//40//missed*
    this.currentRowLeft = [];
    this.currentRowMid = [];
    this.currentRowNew = [];
    this.currentRowRight = [];

    this.bgm;
    this.redInt;
    this.newInt;
    this.blueIntLeft;
    this.blueIntRight;

    //animation frame rate
    createjs.Ticker.setFPS(30);

    this.play = this.play.bind(this);
    this.stop = this.stop.bind(this);
    this.music = this.music.bind(this);
    this.reset = this.reset.bind(this);
    this.regame =  this.regame.bind(this);
    this.tapRed = this.tapRed.bind(this);
    //--EXTRA
    this.tapNew = this.tapNew.bind(this);
    //--EXTRA
    this.myScore = this.myScore.bind(this);
    this.removeTap = this.removeTap.bind(this);
    this.checkGame = this.checkGame.bind(this);
    this.updateScore = this.updateScore.bind(this);
    this.missMessage = this.missMessage.bind(this);
    this.tapBlueLeft = this.tapBlueLeft.bind(this);
    this.tapBlueRight = this.tapBlueRight.bind(this);
    this.createRedTaps = this.createRedTaps.bind(this);
    //--EXTRA
    this.createNewTaps = this.createNewTaps.bind(this);
    //--
    this.createInterval = this.createInterval.bind(this);
    this.createBlueLeftTaps = this.createBlueLeftTaps.bind(this);
    this.createBlueRightTaps = this.createBlueRightTaps.bind(this);
  } //end constructor

  play(difficulties){
    // this.reset();
    let max = 1000;
    let min = 900;

    //設定被打太鼓掉落編排腳本
    if (this.checkGame(difficulties)) {
      if (difficulties === "beginner") {
        this.reset();
        this.preventDefault();
        levelGame = "level-beginner"
        stopGame = false;
        regame = false 
        this.level = "beginner";
        this.speed = 120;
        this.onGame = true;
        this.music(Object(__WEBPACK_IMPORTED_MODULE_0__sounds__["a" /* ConanTheme */])());
        max = 1000;//1800
        min = 100;//900
      } else if (difficulties === "normal"){
        this.reset();
        this.preventDefault();
        levelGame = "level-normal"
        stopGame = false;
        regame = false 
        this.level = "normal";
        this.speed = 180;
        this.onGame = true;
        this.music(Object(__WEBPACK_IMPORTED_MODULE_0__sounds__["e" /* WilliamOverture */])());
        max = 1100;
        min = 700;
      } else if (difficulties === "master") {
        this.reset();
        this.preventDefault();
        levelGame = "level-master"
        stopGame = false;
        regame = false 
        this.level = "master";
        this.speed = 250;
        this.onGame = true;
        this.music(Object(__WEBPACK_IMPORTED_MODULE_0__sounds__["d" /* Soysauce */])());
        max = 1000;
        min = 500;
      } // end if

      
      this.redInt = setInterval( function() {
        let intervalOne = this.createInterval(max, min);
        setTimeout(function(){this.createRedTaps(this.speed);}.bind(this), intervalOne);
      }.bind(this), 800 );

      //--EXTRA
      this.newInt = setInterval( function() {
        let intervalFour = this.createInterval(max, min);//(max, min)設定被打太鼓(掉落編排腳本)
        setTimeout(function(){this.createNewTaps(this.speed);}.bind(this), intervalFour);
      }.bind(this), 2000 );//800設定被打太鼓(掉落頻率)
      //--

      this.blueIntLeft = setInterval( function(){
        let intervalTwo = this.createInterval(max, min);
        setTimeout(() => {this.createBlueLeftTaps(this.speed);}, intervalTwo);
      }.bind(this), 1200 );

      this.blueIntRight = setInterval( function(){
        let intervalThree = this.createInterval(max, min);
        setTimeout(() => {this.createBlueRightTaps(this.speed);}, intervalThree);
      }.bind(this), 1500 );
    }// end if checkLevel
  } // end play

  checkGame(level){
    if (this.onGame === true ) {
      return false;
    } else if (this.level === null) {
      return true;
    } else if (this.onGame === false && this.level !== level) {
      this.level = level;
      return true;
    }  else {
      return true;
    }
  }

  music(bgm){
    this.bgm = bgm;
    bgm.volume = 0.2;
    if (this.pause === false){
      bgm.pause();
    } else {
      bgm.play();
      this.pause = false;
    }

    const volumeControl = document.getElementById("volume");
    volumeControl.addEventListener("mousemove", setVolume);

    function setVolume(){
      bgm.volume = volumeControl.value * 0.01;
    } // end setVolume
    const muteButton = document.getElementById("info-music-mute-button")
      .addEventListener("click", () => {
        if(stopGame == false ){ //必須遊戲進行中，靜音按鈕才可使用
          if (this.pause === true) {
            bgm.play();
            this.pause = false;
          } else {
            bgm.pause();
            this.pause = true;
          } //end if
        }
      }); // end muteButton

      const that = this;
      this.bgm.addEventListener("ended", function(){
       that.stop();
     });
  } // end music

  createInterval(max=2000, min=500) {
    let value = Math.round(((Math.random() * (max - min)) + min)/100)* 100;
    this.interval = value;
    return this.interval;
  } // end createInterval

  removeTap(element) {
    this.stage.removeChild(element[0]);
    element.shift();
    this.stage.update();
  } //end removeTap

  tapRed() {
    if (this.pause === false) {
      Object(__WEBPACK_IMPORTED_MODULE_0__sounds__["b" /* Don */])().play();
      // let tapGoldN = Object(__WEBPACK_IMPORTED_MODULE_1__tap__["c" /* TaikoGold */])(285);
      var tapGoldM,tapGoldMX;
      (window.screen.width>414)?tapGoldMX=165:tapGoldMX=105;//桌機VS手機
      tapGoldM = Object(__WEBPACK_IMPORTED_MODULE_1__tap__["c" /* TaikoGold */])(tapGoldMX);
      
      var L=this.rand(0,100);
      var R=this.rand(-50,250);
      let Fireworks = Object(__WEBPACK_IMPORTED_MODULE_1__tap__["z2" /* Fireworks */])(L,R);//(40,200);
      this.stage.addChild(tapGoldM);
      this.stage.update();
      setTimeout(() => {
        this.stage.removeChild(tapGoldM);}, 150);
      if (this.currentRowMid[0] &&
          this.currentRowMid[0].y > 505 &&
          this.currentRowMid[0].y < 545) {
        //<--這裡加入爆擊特效-->
        this.stage.addChild(Fireworks);//<--這裡加入爆擊特效
        setTimeout(() => {this.stage.removeChild(Fireworks);}, 600);
        //<--這裡加入爆擊特效-->
        this.removeTap(this.currentRowMid);
        this.hitMessage(150, 200);//<--這裡加入擊中特效
      } else {
        this.missMessage(150, 200);
        this.missed -= 1;
      }
    } // end if
  } // end tapRed

  rand(min,max){
      return Math.round(Math.random()*(max-min))+min;
  } 

  //--EXTRA
  tapNew() {
    if (this.pause === false) {
      Object(__WEBPACK_IMPORTED_MODULE_0__sounds__["b" /* Don */])().play();
      // let tapGoldN = Object(__WEBPACK_IMPORTED_MODULE_1__tap__["c" /* TaikoGold */])(285);
       var tapGoldN,tapGoldNX;
      (window.screen.width>414)?tapGoldNX=285:tapGoldNX=200;//桌機VS手機
      tapGoldN = Object(__WEBPACK_IMPORTED_MODULE_1__tap__["c" /* TaikoGold */])(tapGoldNX);
      
      var L=this.rand(20,60);
      var R=this.rand(-50,250);
      let Fireworks = Object(__WEBPACK_IMPORTED_MODULE_1__tap__["z1" /* Fireworks */])(L,R);//(40,100);
      this.stage.addChild(tapGoldN);
      // this.stage.addChild(Fireworks);
      this.stage.update();
      setTimeout(() => {
        this.stage.removeChild(tapGoldN);}, 150);
      // setTimeout(() => {
        // this.stage.removeChild(Fireworks);}, 150);
      if (this.currentRowNew[0] &&
          this.currentRowNew[0].y > 505 &&
          this.currentRowNew[0].y < 545) {
        //<--這裡加入爆擊特效-->
        this.stage.addChild(Fireworks);//<--這裡加入爆擊特效
        setTimeout(() => {this.stage.removeChild(Fireworks);}, 600);
        //<--這裡加入爆擊特效-->
        this.removeTap(this.currentRowNew);
        this.hitNewBonus();//NEW太鼓爆擊加紅利分
        this.hitMessage(130, 400);//<--這裡加入擊中提示訊息
      } else {
        this.missMessage(130, 200);
        this.missed -= 1;
      }
    } // end if
  } // end tapRed
  //--

  tapBlueLeft() {
    if (this.pause === false) {
      Object(__WEBPACK_IMPORTED_MODULE_0__sounds__["c" /* Ka */])().play();
      // let tapGoldL = Object(__WEBPACK_IMPORTED_MODULE_1__tap__["c" /* TaikoGold */])();
      var tapGoldL,tapGoldLX;
      (window.screen.width>414)?tapGoldLX=45:tapGoldLX=10;//桌機VS手機
      tapGoldL = Object(__WEBPACK_IMPORTED_MODULE_1__tap__["c" /* TaikoGold */])(tapGoldLX);
      
      let Fireworks = Object(__WEBPACK_IMPORTED_MODULE_1__tap__["z3" /* Fireworks */])(200,300);
      this.stage.addChild(tapGoldL);
      this.stage.update();
      setTimeout(() => {
        this.stage.removeChild(tapGoldL);}, 150);
      if (this.currentRowLeft[0] &&
          this.currentRowLeft[0].y > 505 &&
          this.currentRowLeft[0].y < 535) {
        //<--這裡加入爆擊特效-->
        this.stage.addChild(Fireworks);
        setTimeout(() => {this.stage.removeChild(Fireworks);}, 600);
        //<--這裡加入爆擊特效-->
        this.removeTap(this.currentRowLeft);
        this.hitMessage(5, 60);
      } else {
        this.missMessage(5, 60);
        this.missed -= 1;
      }
    } // end if
  } //tapBlueLeft

  tapBlueRight() {
    if (this.pause === false) {
      Object(__WEBPACK_IMPORTED_MODULE_0__sounds__["c" /* Ka */])().play();
      // let tapGoldR = Object(__WEBPACK_IMPORTED_MODULE_1__tap__["c" /* TaikoGold */])(405);
      var tapGoldR,tapGoldRX;
      (window.screen.width>414)?tapGoldRX=400:tapGoldRX=292;//桌機VS手機
      tapGoldR = Object(__WEBPACK_IMPORTED_MODULE_1__tap__["c" /* TaikoGold */])(tapGoldRX);
      
      let Fireworks = Object(__WEBPACK_IMPORTED_MODULE_1__tap__["z3" /* Fireworks */])(200,300);
      this.stage.addChild(tapGoldR);
      this.stage.update();
      setTimeout(() => {
        this.stage.removeChild(tapGoldR);}, 150);
      if (this.currentRowRight[0] &&
          this.currentRowRight[0].y > 505 &&
          this.currentRowRight[0].y < 535) {
        //<--這裡加入爆擊特效-->
        this.stage.addChild(Fireworks);
        setTimeout(() => {this.stage.removeChild(Fireworks);}, 600);
        //<--這裡加入爆擊特效-->
        this.removeTap(this.currentRowRight);
        this.hitMessage(250, 300);
      } else {
        this.missMessage(250, 300);
        this.missed -= 1;
      }
    } // end if
  }  // tapBlueRight

  
  createRedTaps(speed=100){
      const that = this;
      // let redTap = Object(__WEBPACK_IMPORTED_MODULE_1__tap__["d" /* TaikoRed */])(175, 0);
      
      var redTap;
      var redTapX;
      (window.screen.width>414)?redTapX=175:redTapX=118;//桌機VS手機
      redTap = Object(__WEBPACK_IMPORTED_MODULE_1__tap__["d" /* TaikoRed */])(redTapX, 0);
 
   

      that.currentRowMid.push(redTap);
      that.stage.addChild(redTap);
      createjs.Ticker.on("tick", tick);
      function tick(e) {
        speed=100;//設定被打太鼓(掉落速度)
        redTap.y += e.delta/1000*speed;// move 100 pixels per second (elapsedTimeInMS / 1000msPerSecond * pixelsPerSecond):
        
        if(that.currentRowMid.length !== 0 && stopGame === true){
          that.removeTap(that.currentRowMid);
          // that.updateScore();
        }

        if (that.currentRowMid.length !== 0 &&//若掉落超過螢幕畫面則移除消失
            that.currentRowMid[0].y > 600){
          that.removeTap(that.currentRowMid);
            if(stopGame !== true)
              that.missed -= 1;

          that.updateScore();
          if (that.missed < 1 ) { //若機會歸零->結束->秀分數
            that.missed = 0;
            if(stopGame !== true){
              that.stop();
              that.myScore();
            }
          }
        } else {
          that.stage.update(e);
        }


      }
    }//end createRedTaps 

    //--EXTRA
    createNewTaps(speed=100){
      const that = this;
      // let newTap = Object(__WEBPACK_IMPORTED_MODULE_1__tap__["n" /* TaikoRed */])(295, 0);
      
      var newTap;
      var newTapX;
      (window.screen.width>414)?newTapX=295:newTapX=212;//桌機VS手機
      newTap = Object(__WEBPACK_IMPORTED_MODULE_1__tap__["n" /* TaikoRed */])(newTapX, 0);
 
      that.currentRowNew.push(newTap);
      that.stage.addChild(newTap);
      createjs.Ticker.on("tick", tick);
        function tick(e) {
          speed=400;//設定被打太鼓(掉落速度)
          newTap.y += e.delta/1000*speed;// move 100 pixels per second (elapsedTimeInMS / 1000msPerSecond * pixelsPerSecond):
          
          if(that.currentRowNew.length !== 0 && stopGame === true){
            that.removeTap(that.currentRowNew);
            // that.updateScore();
          } 

          if (that.currentRowNew.length !== 0 &&
              that.currentRowNew[0].y > 600){
            that.removeTap(that.currentRowNew);
              if(stopGame !== true)
              that.missed -= 1;

            that.updateScore();
            if (that.missed < 1) { //若機會歸零->結束->秀分數
              that.missed = 0;
              if(stopGame !== true){
                that.stop();
                that.myScore();
              }
            }
          } else {
            that.stage.update(e);
          }
        }      
    }//end createnewTaps
    //--

  createBlueLeftTaps(speed=10){
      const that = this;
      // let blueLeftTap = Object(__WEBPACK_IMPORTED_MODULE_1__tap__["b" /* TaikoBlue */])(55, 0); 
      
      var blueLeftTap;
      var blueLeftTapX;
      (window.screen.width>414)?blueLeftTapX=55:blueLeftTapX=25;//桌機VS手機
      blueLeftTap = Object(__WEBPACK_IMPORTED_MODULE_1__tap__["b" /* TaikoRed */])(blueLeftTapX, 0);
   
  

        that.currentRowLeft.push(blueLeftTap);
        that.stage.addChild(blueLeftTap);
        createjs.Ticker.on("tick", tick); 

        if(that.currentRowLeft.length !== 0 && stopGame === true){
          that.removeTap(that.currentRowLeft);
          // that.updateScore();
        }

        function tick(e){
          blueLeftTap.y += e.delta/1000*speed;
          if (that.currentRowLeft.length !== 0 &&
              that.currentRowLeft[0].y > 600){
            that.removeTap(that.currentRowLeft);

              if(stopGame !== true)
              that.missed -= 1;

            that.updateScore();
            if (that.missed < 1) { //若機會歸零->結束->秀分數
              that.missed = 0;
              if(stopGame !== true){
                that.stop();
                that.myScore();
              }
            }
          } else {
            that.stage.update(e);
          }
        }
    }// end createBlueLeftTaps

    createBlueRightTaps(speed=10){
        const that = this;
        // let blueRightTap = Object(__WEBPACK_IMPORTED_MODULE_1__tap__["b" /* TaikoBlue */])(415, 0);
        
        var blueRightTap;
        var blueRightTapX;
        (window.screen.width>414)?blueRightTapX=415:blueRightTapX=305;//桌機VS手機
        blueRightTap = Object(__WEBPACK_IMPORTED_MODULE_1__tap__["b" /* TaikoRed */])(blueRightTapX, 0);
     

        that.currentRowRight.push(blueRightTap);
        that.stage.addChild(blueRightTap);
        createjs.Ticker.on("tick", tick); 


        if(that.currentRowRight.length !== 0 && stopGame === true){
          that.removeTap(that.currentRowRight);
          // that.updateScore();
        }

          function tick(e){
            blueRightTap.y += e.delta/1000*speed;
            if (that.currentRowRight.length !== 0 &&
                that.currentRowRight[0].y > 600) {
              that.removeTap(that.currentRowRight);

            if(stopGame !== true)
              that.missed -= 1;

              that.updateScore();
              if (that.missed < 1) { //若機會歸零->結束->秀分數
              that.missed = 0;
              if(stopGame !== true){
                that.stop();
                that.myScore();
              }
            }
            } else {
              that.stage.update();
            }
          }
        
      }//end createBlueRightTaps

    hitNewBonus(){
      this.score += 60; //每次打擊得分
      this.updateScore();
    }

    hitMessage(x,y){
      this.score += 30; //每次打擊得分
      this.updateScore();
      let [text, textFill] = Object(__WEBPACK_IMPORTED_MODULE_1__tap__["e" /* hitMessages */])(x,y);
      this.stage.addChild(text, textFill);
      this.stage.update();
      setTimeout(() => {
        this.stage.removeChild(text, textFill);
        text.clear;
        textFill.clear;
      }, 400);
    } //end hitMessage

    missMessage(x, y) {
      // this.missed -= 1;
      if (this.missed < 1) {
        this.stop();
        this.myScore();
      }
      let [text, textFill] = Object(__WEBPACK_IMPORTED_MODULE_1__tap__["f" /* missMessages */])(x, y);
      this.stage.addChild(text, textFill);
      this.stage.update();
      setTimeout(() => {
        this.stage.removeChild(text, textFill);
        text.clear;
        textFill.clear;
      }, 400);
    }

    stop(){
      stopGame = true;
      this.updateScore();
      this.myScore();
      this.onGame = false;
      this.killpreventDefault();//取消鎖鍵盤
      // this.currentRowLeft = [];
      // this.currentRowMid = [];
      // this.currentRowNew = [];
      // this.currentRowRight = [];
 
      if (this.bgm) {
        this.bgm.pause();
        this.pause = true;
      }
      clearInterval(this.redInt);
      clearInterval(this.newInt);
      clearInterval(this.blueIntLeft);
      clearInterval(this.blueIntRight);
    } // end stop

    reset(){
      this.clearScore();
      // this.currentRowLeft = [];
      // this.currentRowMid = [];
      // this.currentRowNew = [];
      // this.currentRowRight = [];
      this.score = 0;
      this.missed = 30;//missed*
      this.onGame = false;
      clearInterval(this.redInt);
      clearInterval(this.newInt);
      clearInterval(this.blueIntLeft);
      clearInterval(this.blueIntRight);

      if (this.bgm) {
        this.bgm.pause();
        this.pause = true;
      } 


      
      //重新啟動遊戲
      // document.getElementById("level-beginner").click();
    }
    
    regame(){
      regame = true;
      setTimeout(() => {       
         //重新啟動遊戲
        document.getElementById(levelGame).click();
      },1000);

    }

    updateScore() {
      let score = document.getElementById("my-score");
      let miss = document.getElementById("my-miss");
      score.innerHTML = this.score;
      miss.innerHTML = this.missed;
    }

    clearScore(){
      let score = document.getElementById("my-score");
      let miss = document.getElementById("my-miss");
      score.innerHTML = 0;
      miss.innerHTML = 30; //missed*
    }

    sendForm(memId,couponNo){
      //=====使用Ajax 回server端,取回登入者姓名, 放到頁面上 
      
      var xhr = new XMLHttpRequest();
      xhr.onload = function(){
        if( xhr.responseText == "error"){
          alert("帳密錯誤，請重新輸入");
        }else{
          $('#gameOver').css({"display":"none"}); 
          location.href="user.php"; 

          // $id("memName").innerHTML = xhr.responseText;
          // //將登入表單上的資料清空，並隱藏起來
          // $id('lightBox').style.display = 'none';
          // $id('memId').value = '';
          // $id('memPsw').value = '';
          // $id('spanLogin').innerHTML = "登出";
        }
      }
      xhr.open("Post", "ajaxCoupon.php", true);
      xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
      // xhr.send(`memId=${$id("memId").value}&memPsw=${$id("memPsw").value}`);   
      xhr.send(`memId=${memId}&couponNo=${couponNo}`);   

    }

    preventDefault(){
       document.addEventListener('keydown', function (e) {
              e.preventDefault(); 
              }, false); 
    }

    killpreventDefault(){
       document.addEventListener('keydown', function (e) {
              e.returnValue = true;
              }, false);
    }

    noMoreGames(){      
      document.getElementById("cancel").style.display="none";
      document.getElementById("regame").style.display="none";
      document.getElementById("toMenu").style.display="none";
    }
    noCouponToYou(){
      document.getElementById("getCoupon").style.display="none";
    }

    myScore() { 

       if(regame==false){
        const finalScore = this.score;
        document.getElementById("score").innerHTML = finalScore + " 分";
      // let [gameOver, yourScore, finalScore] = Object(__WEBPACK_IMPORTED_MODULE_1__tap__["g" /* showScore */])(this.score);
      // this.stage.addChild(gameOver, yourScore, finalScore);
      // this.stage.update();
      // document.addEventListener("click", () => {
      //   this.stage.removeChild(gameOver, yourScore, finalScore);
      // });
       document.getElementById("getCoupon").style.display="";
      document.getElementById("cancel").style.display=""
      document.getElementById("regame").style.display=""
      document.getElementById("toMenu").style.display=""


      //判斷得分獎勵
      var couponNo="";
      $('#gameOver').css({"display":"flex"});  
      if(finalScore>=400){
        this.noMoreGames(); 
        couponNo = 3;
       $('#couponImg').css({"background-image":"url(tapu_no_tatsujin-master/assets/images/150coupon.png)"});  
      }else if(finalScore>=350){
        this.noMoreGames();     
        couponNo = 2;
       $('#couponImg').css({"background-image":"url(tapu_no_tatsujin-master/assets/images/100coupon.png)"});  
      }else if(finalScore>=200){
        this.noMoreGames(); 
        couponNo = 1;
       $('#couponImg').css({"background-image":"url(tapu_no_tatsujin-master/assets/images/50coupon.png)"});  
      }else{
        this.noCouponToYou()
        couponNo = 0;
         $('#couponImg').css({"background-image":"url(tapu_no_tatsujin-master/assets/images/tryAgain_test_01.png)"});  
       }
 

      //設定跳窗按鈕
      document.getElementById("getCoupon")
          .addEventListener("click", () => { 
            // $('#gameOver').css({"display":"none"});
            
              //檢查是否已登入
              const that = this;
              var xhr = new XMLHttpRequest();
              xhr.open("get", "checkLoginInfo.php", true);
              xhr.send(null);
              xhr.onload = function(){
                var loginInfo = JSON.parse(xhr.responseText);
                //如果已經登入
                if( loginInfo.memName ){
                  var memId = loginInfo.memId;
                  that.sendForm(memId,couponNo);//領取票券
                  //清空分數
                  that.reset(); 
                  // location.href="user.php";
                  // location.href="index.html";
                }else{                 

                   // $('#NotLogged').css({"display":"none"});
                   $('#NotLogged').css({"display":"block"});

                       $('#reBtn').click(function(){
                        $('#NotLogged').css('display','none');
                        });
                         $('#GoToBtn').click(function(){
                        $('#NotLogged').css('display','none');
                         showLoginForm();
                    });
                   
                }
              }

            // this.checklogin() //-- NOT USING;
            // this.sendForm(couponNo);
          });
      document.getElementById("regame")
          .addEventListener("click", () => { 
              document.getElementById("reset").click();  
              $('#gameOver').css({"display":"none"});     
              //清空分數
                  this.reset();
          });
      document.getElementById("cancel")
          .addEventListener("click", () => { 
            this.reset();
            $('#gameOver').css({"display":"none"});  
            //清空分數
                  this.reset();
          });
      document.getElementById("toMenu")
          .addEventListener("click", () => { 
            // this.reset();
            // $('#gameOver').css({"display":"none"});  
            // //清空分數
            //       this.reset();

              location.href='Game.php';
          });

        }//stopGame==true       


    }


    

   
} //end Game

/* harmony default export */ __webpack_exports__["a"] = (Game);


/***/
/* 第4區 - 遊戲聲音 */
/***/

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* global createjs */

const ConanTheme = () => {
  let conan = new Audio('tapu_no_tatsujin-master/assets/sounds/Reminisce - A Himitsu.mp3');
  return conan;
};
/* harmony export (immutable) */ __webpack_exports__["a"] = ConanTheme;


const WilliamOverture = () => {
  let william = new Audio('tapu_no_tatsujin-master/assets/sounds/Life - KV.mp3');
  return william;
};
/* harmony export (immutable) */ __webpack_exports__["e"] = WilliamOverture;


const Don = () => {
  let don = new Audio('tapu_no_tatsujin-master/assets/sounds/Bass.mp3');
  return don;
};
/* harmony export (immutable) */ __webpack_exports__["b"] = Don;


const DonDon = () => {
  let dondon = new Audio ('tapu_no_tatsujin-master/assets/sounds/Bass.mp3');
  return dondon;
};
/* unused harmony export DonDon */


const Ka = () => {
  let kak = new Audio ('tapu_no_tatsujin-master/assets/sounds/Bass.mp3');
  return kak;
};
/* harmony export (immutable) */ __webpack_exports__["c"] = Ka;


const Soysauce = () => {
  let soysauce = new Audio ('tapu_no_tatsujin-master/assets/sounds/It just makes me happy.mp3');
  return soysauce;
};
/* harmony export (immutable) */ __webpack_exports__["d"] = Soysauce;



/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map
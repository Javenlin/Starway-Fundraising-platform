/* global createjs */

import { ConanTheme, WilliamOverture, Don, Ka, Soysauce } from './sounds';
import { TaikoBlue, TaikoRed, TaikoGold, FireworkGradients,
        hitMessages, missMessages, showScore } from './tap';

class Game {
  constructor(stage){
    this.stage = stage;
    this.speed = 100;
    this.pause = true;
    this.score = 0;
    this.combo = 0;
    this.level = null;
    this.onGame = false;
    this.missed = 40;
    this.currentRowLeft = [];
    this.currentRowMid = [];
    this.currentRowRight = [];

    this.bgm;
    this.redInt;
    this.blueIntLeft;
    this.blueIntRight;

    //animation frame rate
    createjs.Ticker.setFPS(30);
    // 定时调用stage.update()这个方法。
    // Ticker设置的频率也就是游戏的帧数

    this.play = this.play.bind(this);
    this.stop = this.stop.bind(this);
    this.music = this.music.bind(this);
    this.reset = this.reset.bind(this);
    this.tapRed = this.tapRed.bind(this);
    this.myScore = this.myScore.bind(this);
    this.removeTap = this.removeTap.bind(this);
    this.checkGame = this.checkGame.bind(this);
    this.updateScore = this.updateScore.bind(this);
    this.missMessage = this.missMessage.bind(this);
    this.tapBlueLeft = this.tapBlueLeft.bind(this);
    this.tapBlueRight = this.tapBlueRight.bind(this);
    this.createRedTaps = this.createRedTaps.bind(this);
    this.createInterval = this.createInterval.bind(this);
    this.createBlueLeftTaps = this.createBlueLeftTaps.bind(this);
    this.createBlueRightTaps = this.createBlueRightTaps.bind(this);
  } //end constructor

  play(difficulties){
    this.reset();
    let max = 1000;
    let min = 900;

    if (this.checkGame(difficulties)) {
      if (difficulties === "beginner") {
        this.level = "beginner";
        this.speed = 300;
        this.onGame = true;
        this.music(ConanTheme());
        max = 1800;
        min = 900;
      } else if (difficulties === "normal"){
        this.level = "normal";
        this.speed = 180;
        this.onGame = true;
        this.music(WilliamOverture());
        max = 1100;
        min = 700;
      } else if (difficulties === "master") {
        this.level = "master";
        this.speed = 250;
        this.onGame = true;
        this.music(Soysauce());
        max = 1000;
        min = 500;
      } // end if

      this.redInt = setInterval( function() {
        let intervalOne = this.createInterval(max, min);
        setTimeout(function(){this.createRedTaps(this.speed);}.bind(this), intervalOne);
      }.bind(this), 800 );

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
        if (this.pause === true) {
          bgm.play();
          this.pause = false;
        } else {
          bgm.pause();
          this.pause = true;
        } //end if
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
      Don().play();
      let tapGoldM = TaikoGold(165);
      this.stage.addChild(tapGoldM);
      this.stage.update();
      setTimeout(() => {
        this.stage.removeChild(tapGoldM);}, 150);
      if (this.currentRowMid[0] &&
          this.currentRowMid[0].y > 505 &&
          this.currentRowMid[0].y < 545) {
        this.removeTap(this.currentRowMid);
        this.hitMessage(130, 200);
      } else {
        this.missMessage(130, 200);
        this.missed -= 1;
      }
    } // end if
  } // end tapRed

  tapBlueLeft() {
    if (this.pause === false) {
      Ka().play();
      let tapGoldL = TaikoGold();
      this.stage.addChild(tapGoldL);
      this.stage.update();
      setTimeout(() => {
        this.stage.removeChild(tapGoldL);}, 150);
      if (this.currentRowLeft[0] &&
          this.currentRowLeft[0].y > 505 &&
          this.currentRowLeft[0].y < 535) {
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
      Ka().play();
      let tapGoldR = TaikoGold(285);
      this.stage.addChild(tapGoldR);
      this.stage.update();
      setTimeout(() => {
        this.stage.removeChild(tapGoldR);}, 150);
      if (this.currentRowRight[0] &&
          this.currentRowRight[0].y > 505 &&
          this.currentRowRight[0].y < 535) {
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
      let redTap = TaikoRed(175, 0);
      that.currentRowMid.push(redTap);
      that.stage.addChild(redTap);
      createjs.Ticker.on("tick", tick);
      function tick(e) {
        redTap.y += e.delta/1000*speed;// move 100 pixels per second (elapsedTimeInMS / 1000msPerSecond * pixelsPerSecond):
        if (that.currentRowMid.length !== 0 &&
            that.currentRowMid[0].y > 600){
          that.removeTap(that.currentRowMid);
          that.missed -= 1;
          that.updateScore();
          if (that.missed < 1) {
            that.stop();
            that.myScore();
          }
        } else {
          that.stage.update(e);
        }
      }
    }//end createRedTaps

  createBlueLeftTaps(speed=100){
      const that = this;
      let blueLeftTap = TaikoBlue(55, 0);
      that.currentRowLeft.push(blueLeftTap);
      that.stage.addChild(blueLeftTap);
      createjs.Ticker.on("tick", tick);
      function tick(e){
        blueLeftTap.y += e.delta/1000*speed;
        if (that.currentRowLeft.length !== 0 &&
            that.currentRowLeft[0].y > 600){
          that.removeTap(that.currentRowLeft);
          that.missed -= 1;
          that.updateScore();
          if (that.missed < 1) {
            that.stop();
            that.myScore();
          }
        } else {
          that.stage.update(e);
        }
      }
    }// end createBlueLeftTaps

    createBlueRightTaps(speed=100){
        const that = this;
        let blueRightTap = TaikoBlue(295, 0);
        that.currentRowRight.push(blueRightTap);
        that.stage.addChild(blueRightTap);
        createjs.Ticker.on("tick", tick);
        function tick(e){
          blueRightTap.y += e.delta/1000*speed;
          if (that.currentRowRight.length !== 0 &&
              that.currentRowRight[0].y > 600) {
            that.removeTap(that.currentRowRight);
            that.missed -= 1;
            that.updateScore();
            if (that.missed < 1) {
              that.stop();
              that.myScore();
            }
          } else {
            that.stage.update();
          }
        }
      }//end createBlueRightTaps

    hitMessage(x,y){
      this.score += 100;
      this.updateScore();
      let [text, textFill] = hitMessages(x,y);
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
      let [text, textFill] = missMessages(x, y);
      this.stage.addChild(text, textFill);
      this.stage.update();
      setTimeout(() => {
        this.stage.removeChild(text, textFill);
        text.clear;
        textFill.clear;
      }, 400);
    }

    stop(){
      this.updateScore();
      this.myScore();
      this.onGame = false;
      this.currentRowLeft = [];
      this.currentRowMid = [];
      this.currentRowRight = [];
      if (this.bgm) {
        this.bgm.pause();
        this.pause = true;
      }
      clearInterval(this.redInt);
      clearInterval(this.blueIntLeft);
      clearInterval(this.blueIntRight);
    } // end stop

    reset(){
      this.clearScore();
      this.currentRowLeft = [];
      this.currentRowMid = [];
      this.currentRowRight = [];
      this.score = 0;
      this.missed = 40;
      this.onGame = false;
      clearInterval(this.redInt);
      clearInterval(this.blueIntLeft);
      clearInterval(this.blueIntRight);
      if (this.bgm) {
        this.bgm.pause();
        this.pause = true;
      }
    } // end reset

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
      miss.innerHTML = 3000;
    }

    myScore() {
      let [gameOver, yourScore, finalScore] = showScore(this.score);
      this.stage.addChild(gameOver, yourScore, finalScore);
      this.stage.update();
      document.addEventListener("click", () => {
        this.stage.removeChild(gameOver, yourScore, finalScore);
      });
    }
} //end Game

export default Game;

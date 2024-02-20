// ./classes/SpinWheelGame.js
export default class SpinWheelGame {
    constructor(players) {
      this.players = players;
      this.currentPlayerIndex = 0;
      this.isGameFinished = false;
    }
  
    getCurrentPlayer() {
      return this.players[this.currentPlayerIndex];
    }
  
    nextPlayer() {
      if (this.currentPlayerIndex < this.players.length - 1) {
        this.currentPlayerIndex++;
      } else {
        this.isGameFinished = true;
      }
        return !this.isGameFinished;
    }
  
    resetGame() {
      this.currentPlayerIndex = 0;
      this.isGameFinished = false;
    }
  
    gameFinished() {
      return this.isGameFinished;
    }
  }
  
// ./classes/SpinWheelGame.js
export default class SpinWheelGame {
    constructor(players) {
      this.players = this.shuffleArray([...players]);
      this.currentPlayerIndex = 0;
      this.isGameFinished = false;
    }

    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
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
  
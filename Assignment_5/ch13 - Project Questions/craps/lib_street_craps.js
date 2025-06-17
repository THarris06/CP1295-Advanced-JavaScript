// import statement(s)

// private


// public


export default class StreetCraps {
  constructor() {
    this.rollCount = 0;
    this.point = 0;
    this.isGameOver = false;
  }

  reset() {
    this.rollCount = 0;
    this.point = 0;
    this.isGameOver = false;
  }

  /**
   * Process a roll and return an object indicating game status.
   * @param {number} roll - The dice roll total.
   * @returns {object} - { message: string, gameOver: boolean }
   */
  processRoll(roll) {
    this.rollCount++;

    if (this.rollCount === 1) {
      // Come out roll
      if (roll === 7 || roll === 11) {
        this.isGameOver = true;
        return { message: `You rolled ${roll} on the come out roll - you win!`, gameOver: true };
      }
      else if ([2, 3, 12].includes(roll)) {
        this.isGameOver = true;
        return { message: `You rolled ${roll} on the come out roll - you lose.`, gameOver: true };
      }
      else {
        this.point = roll;
        return { message: `Point is set to ${roll}`, gameOver: false };
      }
    }
    else {
      // Subsequent rolls
      if (roll === this.point) {
        this.isGameOver = true;
        return { message: `You rolled a ${roll} - you win!`, gameOver: true };
      }
      else if (roll === 7) {
        this.isGameOver = true;
        return { message: `You rolled a ${roll} - you lose.`, gameOver: true };
      }
      else {
        return { message: `You rolled a ${roll}. Keep rolling...`, gameOver: false };
      }
    }
  }
}

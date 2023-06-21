import inquirer from "inquirer";
class NumberGenerator {
    constructor(min, max) {
        this.min = min;
        this.max = max;
    }
    generateNumber() {
        return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    }
}
class Game {
    constructor() {
        this.randomNumber = 0;
        this.attempts = 0;
        this.gameOver = false;
    }
    startGame(min, max) {
        this.randomNumber = new NumberGenerator(min, max).generateNumber();
        this.attempts = 0;
        this.gameOver = false;
        console.log(`Welcome to the Guess the Number game! A random number between ${min} and ${max} has been generated.`);
    }
    async playGuess() {
        const { number } = await inquirer.prompt({
            type: "input",
            name: "number",
            message: "What is your guess?",
        });
        const userGuess = parseInt(number, 10);
        if (this.gameOver) {
            console.log("The game is already over. Please start a new game.");
            return;
        }
        this.attempts++;
        if (userGuess === this.randomNumber) {
            console.log(`Congratulations! You guessed the number correctly in ${this.attempts} attempts.`);
            this.gameOver = true;
        }
        else if (userGuess < this.randomNumber) {
            console.log("Too low! Guess a higher number.");
        }
        else {
            console.log("Too high! Guess a lower number.");
        }
    }
}
const game = new Game();
game.startGame(1, 2);
game.playGuess();

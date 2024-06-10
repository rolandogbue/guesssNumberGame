// Guess a number game program
const minimumNumber = 1;
const maximumNumber = 100;

const answer = Math.floor(
  Math.random() * (maximumNumber - minimumNumber + 1) + minimumNumber
);

let attempts = 0;
let guess;
let running = true;

while (running) {
  guess = window.prompt(
    `Guess a number between ${minimumNumber} and ${maximumNumber}`
  );
  guess = Number(guess);

  if (isNaN(guess)) {
    window.alert("Please enter a valid number");
  } else if (guess < minimumNumber || guess > maximumNumber) {
    window.alert("Please enter a number between 1 and 100");
  } else {
    attempts++;
    if (guess < answer) {
      window.alert("Too low! Try again!");
    } else if (guess > answer) {
      window.alert("Too high! Try again!");
    } else {
      console.log(
        `Congrats! You guessed right with a total of ${attempts} attempts.`
      );
      running = false;
    }
  }
}

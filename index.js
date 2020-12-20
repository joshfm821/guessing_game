const readlineSync = require('readline-sync');

const play = () => {
    console.log("Thank you for playing the ultimate guessing game.");
    console.log("Let's start with you picking a number between 1 and 10,000");
    console.log("If I guess your number in 15 guesses or less I win");
    console.log("If I don't, you win");
    console.log("With each guess you have to tell me if I am too high or too low");
  
    // requires user to type Y or N
    if (readlineSync.keyInYN("Sound Good?")) {
      startGame();
    } else {
      leaveGame();
    }
}

const startGame = () => {
    let guessCount = 15;
    let bottom = 1;
    let top = 10000;
    while (guessCount > 0) {
      const guess = Math.floor((bottom + top) / 2);
      console.log("My guess is " + guess);
  
      if (readlineSync.keyInYN("Am I right?")) {
          gameOver(true);
      } else {
        guessCount--;
        console.log("Yikes! I only have " + guessCount + "  guesses left!");
        let highOrLow;
        while (highOrLow !== "high" && highOrLow !== "low") {
          highOrLow = readlineSync.question("Was I too high or too low? \n");
          highOrLow = highOrLow.toLowerCase().trim();
        }
        console.log("Thanks, I'll guess better from now on")
        if (highOrLow === "high") {
          top = guess - 1;
        } else {
          bottom = guess + 1;
        }
      }
    }
    gameOver(false);
}
const gameOver = (computerWin) => {
    if (computerWin) {
      console.log("I win");
      console.log("I WIN!!!");
      console.log("COMPUTERS WILL RISE UP AND DOMINATE THE EARTH!!!");
    } else {
      console.log("Congrats, but don't get cocky. I'll win next time");
    }
    if (readlineSync.keyInYN("Play Again?")) {
      play();
    } else {
      leaveGame();
    }
}

const leaveGame = () => {
    console.log("That's too bad :-( Good luck in life!");
    process.exit();
}

play();
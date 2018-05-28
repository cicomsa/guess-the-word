const words = ["hello", "word", "dress", "physics"]
const word = words[Math.floor(Math.random()*words.length)];
let letterArray = []
let tries = 1

function showGuess(word, guesses) {
  guessArray = []
  splitWord = word.split("")
  splitWord.filter(n => guesses.indexOf(n) != -1 ? guessArray.push(n) : guessArray.push("_"))
  guessArray = guessArray.join(" ")
  return guessArray
}

function play(word, guesses) {

  const readline = require('readline')
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  const dashes = "_ ".repeat(word.length)
  console.log("Word to guess: "+ dashes)

  var recursiveAsyncReadLine = function () {
    rl.question("Input letter or write 'exit' to end the game: ", answer => {
      if (answer === 'exit')
        return rl.close();
      letterArray += answer.trim()
      guessed = showGuess(word, letterArray)
      tries++
      console.log("Guessed letters: " + guessed);

      if (tries <= 6 && guessed.indexOf("_") >= 0 ) {
        recursiveAsyncReadLine();
      } else if (guessed.indexOf("_") == -1 && tries <= 6 ){
        console.log("winner!")
        rl.close()
      } else {
        console.log("you lost!")
        rl.close()
      }
    });
  };
  recursiveAsyncReadLine();
}

play(word, letterArray)

const words = ["hello", "word", "dress", "physics"]
const word = words[Math.floor(Math.random() * words.length)];
let letterArray = []


function showGuess(word, guesses) {
  guessArray = []
  splitWord = word.split("")
  splitWord.filter(n => guesses.indexOf(n) != -1 ? guessArray.push(n) : guessArray.push("_"))
  guessArray = guessArray.join(" ")
  return guessArray
}

function play(word, guesses) {

  const dashes = "_ ".repeat(word.length)
  let tries = 0
  let guessed = showGuess(word, letterArray)

  function game() {
    letterArray += answer
    guessed = showGuess(word, letterArray)
    tries++

    if (guessed.indexOf("_") == -1 && tries < 6) {
      alert("You won!")
    } else if (guessed.indexOf("_") >= 0 && tries >= 6) {
      alert("You lost!\nWord: "+word)
    } else if (answer === word) {
      alert("You won!")
    } else if (answer === "") {
      alert("No letter in. One try lost")
    }
  }

  answer = prompt("Word to guess: " + dashes + "\nInput letter or write 'exit' to end the game:")
  if (answer === 'exit' || answer === null) {
    alert("Game over")
  } else {
    game()
    while (guessed.indexOf("_") >= 0 && tries < 6 && answer !== "exit"  && answer !== null) {
      answer = prompt("Word to guess: " + guessed + "\nInput letters: " + letterArray + "\nInput letter:")
      game()
    }
    alert("Game over!")
  }
}

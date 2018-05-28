import {GUESS} from '../actions/guess'

const words = ["hi", "war", "dress", "physics"]
export const randWord = words[Math.floor(Math.random() * words.length)]
const dashes = "_ ".repeat(randWord.length)

export default (state = dashes, action) => {
  switch(action.type) {
    case GUESS:

      const splitWord = randWord.split("")
      const wordGuess = splitWord.map(letter => action.payload.includes(letter)? letter: "_ ")
      const joined = wordGuess.join("")
        return joined

    default:
      return state
  }
}

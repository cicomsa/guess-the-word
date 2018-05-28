import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import GuessForm from './GuessForm'
import {randWord} from '../reducers/guess'
import hangmanImage from '../Hangman.png'
import './guessTheWord.css'

class GuessTheWord extends PureComponent {

  render() {
    const guess = this.props.guess
    const numberTries = this.props.tries
    function br() {

      if (guess === randWord.toString()){
        return <p className="result">You won!</p>
      }
      if (numberTries === 0){
        return <p className="result">You lost!</p>
      }
    }

  return (

    <div className="mainPage">
      <div className ="content">
        <img className="image"
          src={hangmanImage} alt="hangmanImage"/>
        <p>Number of tries left: </p>
        <p>{numberTries}</p>
        <p>{guess}</p>
        {numberTries > 0 && <GuessForm/>}
        {br()}
        <p className="newWord" 
          onClick={() => window.location.reload()}>
          New Word
        </p>
      </div>
    </div>
    )
  }
}

const mapStateToProps = function(state) {
  return {
  guess: state.guess,
  tries: state.tries
  }
}

export default connect (mapStateToProps)(GuessTheWord)

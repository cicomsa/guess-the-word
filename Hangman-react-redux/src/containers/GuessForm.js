import React, {PureComponent} from 'react'
import {GUESS} from '../actions/guess'
import {NUMBER_TRIES} from '../actions/tries'
import {connect} from 'react-redux'
import './guessForm.css'

class GuessForm extends PureComponent {
	state = {}

 	handleChange = (event) => {
   this.setState({value: event.target.value})
   event.preventDefault()
 	}

	handleSubmit = (e) => {
    e.preventDefault()
		this.props.dispatch({type: GUESS, payload: this.state.value})
		this.props.dispatch({type: NUMBER_TRIES})
		e.preventDefault()
	}

	render() {

    const initialValue = this.props.initialValue || {}

		return (

			<form onSubmit={this.handleSubmit}>
				<div>
					<p>Letter: </p>
					<label></label>
					<input name="button"
						id="button"
						value={this.state.value || initialValue.value || ''}
						onChange={ this.handleChange } />
				</div>
				<div>
					<p className="enter" onClick={this.handleSubmit}>Enter</p>
				</div>

			</form>
		)
	}
}

const mapStateToProps = function(state) {
  return {
    guess: state.guess,
		count: state.tries
  }
}

export default connect (mapStateToProps)(GuessForm)

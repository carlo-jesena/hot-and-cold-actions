import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

export class Form extends React.Component {
  constructor (props) {
    super(props);
		this.sendUserGuess = this.sendUserGuess.bind(this);
  }

	componentDidMount () {
		this.props.dispatch(actions.numberGen());
	}

	sendUserGuess (event) {
		event.preventDefault();
		const userGuess = this.textInput.value;
		this.props.dispatch(actions.submitGuess(userGuess));
    this.textInput.value = '';
	}

  render() {
		const feedbackDisplay = this.props.game.message;
		const guessArrayDisplay = this.props.game.guess.join(', ');

    return (
      <div className="gameForm">
				<form onSubmit={this.sendUserGuess}>
        	<input
						type="text"
						ref={input => this.textInput = input}/>
					<button
						type="submit">
							Take a guess!
					</button>
				</form>
        <p className="displayFeedback"> {feedbackDisplay} </p>
        <p className="displayGuessArray"> {guessArrayDisplay} </p>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  game: state
});

export default connect(mapStateToProps)(Form);

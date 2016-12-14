import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class Form extends React.Component {
  constructor (props) {
		console.log('Form props logged', props);
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
	}

  render() {
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
        <p className="displayFeedback"> {} </p>
        <p className="displayArray"> {} </p>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  game: state
});

export default connect(mapStateToProps)(Form);

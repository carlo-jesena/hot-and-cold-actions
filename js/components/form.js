import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class Form extends React.Component {
  constructor () {
    super();
		// this.sendUserGuess = this.sendUserGuess.bind(this);
  }

	// sendUserGuess (event) {
	// 	event.preventDefault();
	// 	this.props.dispatch(actions.submitGuess(event.target.value)); // not gonna work
	// }

  render() {
    return (
      <div className = "gameForm">
				<form>
        	<input type = "text" />
	        <button type = "submit"> Take a guess! </button>
				</form>
        <p className = "displayFeedback"> {} </p>
        <p className = "displayArray"> {} </p>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  game: state
});

export default connect(mapStateToProps)(Form);

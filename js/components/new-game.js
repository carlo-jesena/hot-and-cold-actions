import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

export class NewGame extends React.Component {
	constructor (props) {
    super(props);
		this.resetGame = this.resetGame.bind(this);
  }

	resetGame (event) {
		console.log('Reset game button clicked.')
		this.props.dispatch(actions.newGame());
	}

render () {
	  return (
	    <button onClick={this.resetGame}>
	      Play again!
	    </button>
	  )
	}
}

const mapStateToProps = (state, props) => ({
  game: state
});

export default connect(mapStateToProps)(NewGame);

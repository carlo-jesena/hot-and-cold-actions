import React from 'react';
import ReactDOM from 'react-dom';
import Form from './form';
import NewGame from './new-game';
import * as actions from '../actions/index';
import {connect} from 'react-redux';

class Game extends React.Component {
  constructor (props) {
    super(props);

  }

  render() {
    return (
      <Form />
    )

  }
}

const mapStateToProps = (state, props) => ({
  actions: state
});

export default connect(mapStateToProps)(Game);

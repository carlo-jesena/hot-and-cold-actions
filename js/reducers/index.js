import * as actions from '../actions/index';
import {combineReducers} from 'redux';

const answerReducer = (state = '', action) => {
	console.log(action);
	if (action.type === actions.GENERATED_NUMBER) {
		return action.answer;
	} else {
		return state;
	}
};

const guessReducer = (state = '', action) => {
	if (action.type === actions.RECORD_GUESS) {
		return action.guess;
	} else {
		return state;
	}
};

export default combineReducers({
	answer: answerReducer,
	guess: guessReducer
});

import * as actions from '../actions/index';
import {combineReducers} from 'redux';

const answerReducer = (state = '', action) => {
	switch (action.type) {
		case actions.GENERATED_NUMBER:
			return action.answer;
		default:
			return state;
	}
};

const guessReducer = (state = '', action) => {
	if (action.type === actions.GUESS) {
		return action.userGuess;
	} else {
		return state;
	}
};

const guessArrayReducer = (state = [], action) => {
	if (action.type === actions.RECORD_GUESS) {
		return [...state, action.newGuess];
	} else {
		return state;
	}
};

const evaluate = (state = '', action) => {
	if (action.type === actions.FEEDBACK) {
		return action.feedback;
	} else {
		return state;
	}
};

const hasWon = (state = false, action) => {
	if (action.type === actions.HAS_WON) {
		return action.bool;
	} else {
		return state;
	}
};

export default combineReducers({
	answer: answerReducer,
	userGuess: guessReducer,
	feedback: evaluate,
	guessArray: guessArrayReducer,
	hasWon: hasWon
});

// ./reducers/index.js
import * as actions from '../actions/index';
// import store from '../store';

const initialState = {
	answer: 'uh-oh',
	userInputArray: [42],
	guess: 'test'
};

// console.log(actions);

export const answerReducer = (state = initialState, action) => {
	console.log(action);
	if (action.type === actions.GENERATED_NUMBER) {
		return Object.assign(
			{},
			initialState,
			{
				answer: action.answer
			}
		);
	}
};

// console.log('testing', myReducer);

// # App initialization #

// generate secret number

// store.dispatch(secretNumber(generateSecretNumber()));

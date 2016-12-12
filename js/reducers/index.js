// ./reducers/index.js
import * as actions from '../actions/index';
// import store from '../store';

const initialState = {
	generatedNumber: 'uh-oh',
	userInputArray: [42],
	guess: 'test'
};

export const myReducer = (state = initialState, action) => {
	if (action.type === GENERATED_NUMBER) {
		return Object.assign(
			{},
			initialState,
			{
				generatedNumber
			}
		);
	}
};

console.log('testing', myReducer);

// # App initialization #

// generate secret number

// store.dispatch(secretNumber(generateSecretNumber()));

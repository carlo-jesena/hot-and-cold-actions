// ./reducers/index.js

import * as actions from '../actions/index';
import store from '../store';

const initialState = {
	generatedNumber: 'uh-oh',
	userInputArray: [42],
	guess: 'test'
};


const myReducer = (state = initialState, action) => {
  console.log('inside myReducer');

  return {generatedNumber: 12};

	// if (action.type === SECRET_NUMBER) {
	// 	return Object.assign(
  //     {},
  //     initialState,
  //     {
  //       generatedNumber
  //     }
  //   );
	// }
};

console.log('testing', myReducer);

export default myReducer;

// # App initialization #

// generate secret number

// store.dispatch(secretNumber(generateSecretNumber()));

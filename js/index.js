//entry point
require('babel-polyfill');

import myReducer from './reducers/index';
import * as actions from './actions/index';
import store from './store';

store.dispatch(actions
	.generateNumber(12)
);

store.dispatch(actions
	.guess(11)
);

store.dispatch(actions
	.recordGuess(11)
);

store.dispatch(actions
	.evaluate('You\'re getting warmer!')
);

console.log(store.getState());

// REACT
// - generate random number
// - process user input
// - calculate difference between answer and input; return feedback

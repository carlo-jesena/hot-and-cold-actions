//entry point
require('babel-polyfill');

import myReducer from './reducers/index';
import * as actions from './actions/index';
import store from './store';

store.dispatch(actions
	.generateNumber(12)
);

store.dispatch(actions
	.recordGuess(11)
);

console.log(store.getState());

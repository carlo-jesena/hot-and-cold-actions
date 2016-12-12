//entry point
require('babel-polyfill');

import myReducer from './reducers/index';
import * as actions from './actions/index';
import store from './store';


// const generateSecretNumber = () => {
//   return 12; // Math.floor(Math.random() * 101)
// };

store.dispatch(actions.generateNumber(12));

console.log(store.getState());

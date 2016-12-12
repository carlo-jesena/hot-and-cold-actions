import { createStore } from 'redux';
// import * as reducers from './reducers/index';
import myReducer from './reducers/index';

// console.log(myReducer);

export default createStore(myReducer);

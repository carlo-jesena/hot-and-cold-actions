import * as actions from '../actions/index';
const initial = {
  secretNumber: 0,
  guess: [],
  message: ''
};

export const gameReducer = function(state = initial, action) {
	console.log('gameReducer', state);

  switch (action.type) {
		case actions.NUMBER_GEN:
    return {...state,
      secretNumber: action.number
    };

  	case actions.SUBMIT_GUESS:
			let newMessage = '';
			let userGuess = +action.guess;

			switch (userGuess) {
			 	case !userGuess: // 'not' user guess...
	      	newMessage = "Wrong!!!!";
				case state.secretNumber:
					newMessage = "Yes, that's it!";
	      }

			return {...state,
	      guess: [...state.guess, action.guess],
	      message: newMessage
	    };

  	case actions.NEW_GAME:
			return initial;

  default:
		return state;
	}
}

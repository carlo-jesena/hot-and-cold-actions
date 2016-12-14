import * as actions from '../actions/index';
const initial = {
  secretNumber: 0,
  guess: [],
  message: ''
};

export const gameReducer = function(state = initial, action) {
	console.log('gameReducer', state);

	let newMessage = '';
	const userGuess = +action.guess;

  switch (action.type) {
		case actions.NUMBER_GEN:
    return {...state,
      secretNumber: action.number
    };
  	case actions.SUBMIT_GUESS:
			switch (userGuess) {
				// why isn't this working?
			 	case !userGuess:
	      	newMessage = "Wrong!!!!";
				case state.secretNumber:
					newMessage = "Yes, that's it!";
	      }
			return {...state,
	      guess: [...state.guess, action.guess],
	      message: newMessage
	    };
  	case actions.NEW_GAME:
		console.log('Time for a new game')
    //refresh page
  default:
		return state;
	}
}

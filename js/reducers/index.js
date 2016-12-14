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
      let difference = Math.abs(userGuess - state.secretNumber)

      if (userGuess === state.secretNumber) {
        newMessage = "Yaaaayyy you got it!!"
      }
      if (difference <= 5) {
        newMessage = "Woah getting hot"
      }
      if ((difference > 5) && (difference <= 10)) {
        newMessage = "Getting warmer"
      }
      if ((difference > 10) && (difference <= 15)) {
        newMessage = "You're cooling off"
      }
      if (difference > 15) {
        newMessage = "Not even close"
      }




			return {...state,
	      guess: [...state.guess, action.guess],
	      message: newMessage
	    };

  	case actions.NEW_GAME:
			console.log('Time for a new game')
			return Object.assign({}, initial);
  default:
		return state;
	}
}

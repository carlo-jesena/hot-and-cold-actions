import * as actions from '../actions/index';
const initial = {
  secretNumber: 0,
  guess: [],
  message: '',
  count: null,
  fewestGuesses:null
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
      let difference = Math.abs(userGuess - state.secretNumber);
      let count= state.count;
      let fewestGuesses= state.fewestGuesses;

			if (userGuess.toString() === NaN.toString()) {
				return {...state,
		      guess: [...state.guess],
		      message: "Please enter a number!"
		    };
			}
      if (userGuess === state.secretNumber) {
        newMessage = "Yaaaayyy you got it!!"
      }
      if ((difference > 0) && (difference <= 5)) {
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
      count++;

      return {...state,
	      guess: [...state.guess, action.guess],
	      message: newMessage,
        count,
        fewestGuesses
	    };

  	case actions.NEW_GAME:
			console.log('Time for a new game')
			return Object.assign({}, initial);

    case actions.FETCH_FEWEST_GUESSES:
      return {...state, fewestGuesses: action.num};

    case actions.SAVE_FEWEST_GUESSES:
      let lastGuess = state.guess[-1];
      let currentCount = state.count;
      let correctNumber = state.secretNumber;
      let fewestGuesses = state.fewestGuesses

      if (lastGuess === correctNumber) {
        if (currentCount < fewestGuesses) {
          return {...state, fewestGuesses: currentCount};
        }
      }

//if guess === secret number {
  //if count < fewest guesses 
  //update fewest guesses state
  //make post action
//}

//popup telling user they beat the top score

  default:
		return state;
	}
}

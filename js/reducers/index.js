import * as actions from '../actions/index';
const initialState = {
  secretNumber: 0,
  guess: [],
  message: ''
};

export const gameReducer = (state=initialState, action) => {
  if (action.type === actions.NUMBER_GEN) {
    return {...state,
      secretNumber: action.number
    };
  }

  if (action.type === actions.SUBMIT_GUESS) {

		console.log('action.type, action.guess', action.type, action.guess);
    console.log('secret number', state.secretNumber);

		let newMessage = '';
		const userGuess = +action.guess;

		switch (action.guess) {
			// why isn't this working?
		 	case !state.secretNumber:
      	newMessage = "Wrong!!!!";
			case state.secretNumber:
				newMessage = "Yes, that's it!";
      }

		return {...state,
      guess: [...state.guess ,action.guess],
      message: newMessage
    };
  }

  else if (action.type === actions.NEW_GAME) {
    state=initialHotOrColdState;
    //refresh page
  }

  return state;

}

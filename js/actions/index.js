// ./actions/index.js

export const GENERATED_NUMBER = 'GENERATED_NUMBER';
export const GUESS = 'GUESS';
// export const HOT_OR_COLD_FEEDBACK = 'HOT_OR_COLD_FEEDBACK';
export const RECORD_GUESS = 'RECORD_GUESS';
export const WIN = 'WIN';

export const generateNumber = answer => ({
	type: GENERATED_NUMBER,
	answer
});

// export const guess = userInputNumber => ({
// 	type: GUESS,
// 	userInputNumber
// });
//
export const evaluate = answer => ({
	type: HOT_OR_COLD_FEEDBACK,
	answer
});

export const recordGuess = guess => ({
	type: RECORD_GUESS,
	guess
});

export const hasWon = bool => ({
	type: WIN,
	hasWon: bool
});



// won?
// messages to user

// ./actions/index.js

export const GENERATED_NUMBER = 'GENERATED_NUMBER';
export const GUESS = 'GUESS';
export const FEEDBACK = 'FEEDBACK';
export const RECORD_GUESS = 'RECORD_GUESS';
export const HAS_WON = 'HAS_WON';

export const generateNumber = answer => ({
	type: GENERATED_NUMBER,
	answer
});

export const guess = userGuess => ({
	type: GUESS,
	userGuess
});

export const evaluate = (feedback) => ({
	type: FEEDBACK,
	feedback
});

export const recordGuess = newGuess => ({
	type: RECORD_GUESS,
	newGuess
});

export const hasWon = bool => ({
	type: HAS_WON,
	bool
});

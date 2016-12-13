// UI -> Action -> State -> UI ...

// ./actions/index.js

export const GENERATED_NUMBER = 'GENERATED_NUMBER';
export const GUESS = 'GUESS';
export const FEEDBACK = 'FEEDBACK';
export const RECORD_GUESS = 'RECORD_GUESS';
export const HAS_WON = 'HAS_WON';

const guessArray = []

export const generateNumber = answer => ({
	type: GENERATED_NUMBER,
	answer
});

export const guess = currentGuess => ({
	type: GUESS,
	currentGuess
	guessArray
});

export const recordGuess = newGuess => ({
	type: RECORD_GUESS,
	newGuess
});

export const hasWon = bool => ({
	type: HAS_WON,
	bool
});

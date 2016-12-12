/*
ACTIONS
- secret number
- accept guess
- record guess
- give feedback
*/

export const SECRET_NUMBER = 'SECRET_NUMBER';
export const generateNumber = generatedNumber => ({
	type: SECRET_NUMBER,
	generatedNumber
});

export const GUESS = 'GUESS';
export const guess = userInputNumber => ({
	type: GUESS,
	userInputNumber
});

export const HOT_OR_COLD_FEEDBACK = 'HOT_OR_COLD_FEEDBACK';
export const evaluate = answer => ({
	type: HOT_OR_COLD_FEEDBACK,
	answer
});

export const RECORD_GUESS = 'RECORD_GUESS';
export const recordGuess = userGuess => ({
	type: RECORD_GUESS,
	userGuess
});

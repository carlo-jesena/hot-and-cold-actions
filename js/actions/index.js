import 'isomorphic-fetch';

export const NUMBER_GEN = 'NUMBER_GEN';
export const numberGen = () => ({
  type: NUMBER_GEN,
  number:  Math.floor((Math.random() * 100) + 1)
});

export const SUBMIT_GUESS = 'SUBMIT_GUESS';
export const submitGuess = guess => ({
  type: SUBMIT_GUESS,
  guess
});

export const NEW_GAME = 'NEW_GAME';
export const newGame = () => ({
  type: NEW_GAME,
});

export const FETCH_FEWEST_GUESSES = 'FETCH_FEWEST_GUESSES';
export const fetchFewestGuesses = (num) => ({
  type: FETCH_FEWEST_GUESSES,
  num
})

export const fetchFewest = () => dispatch => {
  const url = 'http://localhost:8081/fewest-guesses';
  return fetch(url).then(response => {
    if (!response.ok) {
      const error = new Error(response.statusText)
      error.response = response
      throw error;
    }
    return response;
  })
  .then(response => response.json())
  .then(data =>
    dispatch(fetchFewestGuesses(data))
  );
};

export const SAVE_FEWEST_GUESSES = 'SAVE_FEWEST_GUESSES';
export const saveFewestGuesses = (number) => ({
  type: SAVE_FEWEST_GUESSES,
  number
})

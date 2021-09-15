import {
  buildHangmanWord,
  //HangmanWord,
  //GuessType,
  handleGuess,
} from "./hangman";

import {
  hangmanWord,
  hangmanWordAfter,
  alphabet,
  alphabetAfter,
} from "../data/testData";

test("build word for hangman", () => {
  const input: string = "test";
  expect(buildHangmanWord(input)).toEqual(hangmanWord);
});

test("input handling, test T", () => {
  const guess: string = "T";

  expect(handleGuess(guess, hangmanWord, alphabet)).toEqual({
    HangmanWord: hangmanWordAfter,
    alphabet: alphabetAfter,
  });
});

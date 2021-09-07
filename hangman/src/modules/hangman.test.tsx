import {
  buildHangmanWord,
  HangmanWord,
  GuessType,
  handleGuess,
} from "./hangman";

const hangmanWord: HangmanWord[] = [
  {
    letter: "T",
    guessed: GuessType.Hidden,
  },
  {
    letter: "E",
    guessed: GuessType.Hidden,
  },
  {
    letter: "S",
    guessed: GuessType.Hidden,
  },
  {
    letter: "T",
    guessed: GuessType.Hidden,
  },
];
const hangmanWordAfter: HangmanWord[] = [
  {
    letter: "T",
    guessed: GuessType.Revealed,
  },
  {
    letter: "E",
    guessed: GuessType.Hidden,
  },
  {
    letter: "S",
    guessed: GuessType.Hidden,
  },
  {
    letter: "T",
    guessed: GuessType.Revealed,
  },
];

test("build word for hangman", () => {
  const input: string = "test";
  expect(buildHangmanWord(input)).toEqual(hangmanWord);
});

test("input handling", () => {
  const guess: string = "T";

  //expect(handleGuess(guess, hangmanWord)).toEqual(hangmanWordAfter);
});

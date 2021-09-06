import { buildHangmanWord, HangmanWord, GuessType } from "./hangman";

test("build word for hangman", () => {
  const input: string = "test";
  const hangmanWord: HangmanWord[] = [
    {
      letter: "t",
      guessed: GuessType.Hidden,
    },
    {
      letter: "e",
      guessed: GuessType.Hidden,
    },
    {
      letter: "s",
      guessed: GuessType.Hidden,
    },
    {
      letter: "t",
      guessed: GuessType.Hidden,
    },
  ];

  expect(buildHangmanWord(input)).toEqual(hangmanWord);
});

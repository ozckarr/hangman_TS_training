import { Letter, LetterInteractionType } from "../data/alphabet";

export enum GuessType {
  Revealed,
  Hidden,
  Space,
}

export type HangmanWord = {
  letter: string;
  guessed: GuessType;
};

// Create array out of word, used for displaying
export const buildHangmanWord = (newWord: string): HangmanWord[] => {
  const arr = newWord.toUpperCase().split("");
  let hangmanWord: HangmanWord[] | any = [];
  arr.forEach((letter) => {
    // TODO: If space GuessType.Space
    hangmanWord.push({ letter: letter, guessed: GuessType.Hidden });
  });
  return hangmanWord;
};

/*
Guessed letter comes in
compare if letter in HangmanWord 
if true swap GuessType to Revealed
in alphabet swap LetterInteractionType to correct guess

compare if letter in HangmanWord 
if true swap GuessType to Revealed
in alphabet swap LetterInteractionType to wrongguess
*/

export const handleGuess = (
  guessedLetter: string,
  HangmanWord: Array<HangmanWord>,
  alphabet: Array<Letter>
) => {
  let CorrectGuess: boolean = false;

  HangmanWord.forEach((HangmanLetter) => {
    if (HangmanLetter.letter === guessedLetter) {
      HangmanLetter.guessed = GuessType.Revealed;
      CorrectGuess = true;
    }
  });
  alphabet.forEach((letter) => {
    if (letter.letter === guessedLetter) {
      if (CorrectGuess) {
        letter.interaction = LetterInteractionType.CorrectGuess;
      } else {
        letter.interaction = LetterInteractionType.WrongGuess;
      }
    }
  });

  //NOTOSELF: its an object tripplecheck in Jest. testData.tsx for jest needed?
  return { HangmanWord: HangmanWord, alphabet: alphabet };
};

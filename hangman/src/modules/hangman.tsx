export enum GuessType {
  Revealed,
  Hidden,
}

export type HangmanWord = {
  letter: string;
  guessed: GuessType;
};

/*
pseudo

fetch word
break to array
display number of letters in word
*/

export const buildHangmanWord = (newWord: string): HangmanWord[] => {
  const arr = newWord.split("");
  let newArr: HangmanWord[] | any = [];
  arr.forEach((letter) => {
    newArr.push({ letter: letter, guessed: GuessType.Hidden });
  });
  return newArr;
};

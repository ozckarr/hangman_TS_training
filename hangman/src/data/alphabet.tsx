export enum LetterInteractionType {
  NotPressed,
  WrongGuess,
  CorrectGuess,
}

export type Letter = {
  letter: string;
  interaction: LetterInteractionType;
};

export let alphabet = [
  { letter: "A", interaction: LetterInteractionType.NotPressed },
  { letter: "B", interaction: LetterInteractionType.WrongGuess },
  { letter: "C", interaction: LetterInteractionType.WrongGuess },
  { letter: "D", interaction: LetterInteractionType.WrongGuess },
  { letter: "E", interaction: LetterInteractionType.WrongGuess },
  { letter: "F", interaction: LetterInteractionType.WrongGuess },
  { letter: "G", interaction: LetterInteractionType.WrongGuess },
  { letter: "H", interaction: LetterInteractionType.WrongGuess },
  { letter: "I", interaction: LetterInteractionType.NotPressed },
  { letter: "J", interaction: LetterInteractionType.NotPressed },
  { letter: "K", interaction: LetterInteractionType.NotPressed },
  { letter: "L", interaction: LetterInteractionType.NotPressed },
  { letter: "M", interaction: LetterInteractionType.NotPressed },
  { letter: "N", interaction: LetterInteractionType.NotPressed },
  { letter: "O", interaction: LetterInteractionType.NotPressed },
  { letter: "P", interaction: LetterInteractionType.NotPressed },
  { letter: "Q", interaction: LetterInteractionType.NotPressed },
  { letter: "R", interaction: LetterInteractionType.NotPressed },
  { letter: "S", interaction: LetterInteractionType.NotPressed },
  { letter: "T", interaction: LetterInteractionType.NotPressed },
  { letter: "U", interaction: LetterInteractionType.NotPressed },
  { letter: "V", interaction: LetterInteractionType.NotPressed },
  { letter: "W", interaction: LetterInteractionType.NotPressed },
  { letter: "X", interaction: LetterInteractionType.NotPressed },
  { letter: "Y", interaction: LetterInteractionType.NotPressed },
  { letter: "Z", interaction: LetterInteractionType.NotPressed },
];

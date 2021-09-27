import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { TheHanging } from "./TheHanging";
import { LetterButton } from "./LetterButton";
import { HangmanWord } from "./HangmanWord";

import { alphabet, Letter, LetterInteractionType } from "../data/alphabet";
import {
  buildHangmanWord,
  HangmanWord as HangmanWordType,
  handleGuess,
  GuessType,
} from "../modules/hangman";

const Container = styled.div`
  font-family: "Architects Daughter", cursive;
  color: #000f55;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  background-color: #fff;
  background-image: linear-gradient(
      90deg,
      transparent 79px,
      #abced4 79px,
      #abced4 81px,
      transparent 81px
    ),
    linear-gradient(#eee 0.1em, transparent 0.1em);
  background-size: 100% 1.2em;
`;

const LetterContainer = styled.div`
  display: flex;
  width: 40%;
  flex-wrap: wrap;
`;

export const Layout: React.FC = () => {
  const [theWord, setTheWord] = useState<string>("TEST WORD"); // TODO: Fetch from https://random-word-api.herokuapp.com/home
  const [hangmanWord, setHangmanWord] = useState<Array<HangmanWordType>>([]);
  const [alphabetData, setAlphabetData] = useState<Array<Letter>>(alphabet);
  const [numberOfWrongGuesses, setNumberOfWrongGuesses] = useState<number>(0);
  const [winCheck, setWinCheck] = useState<boolean>(false);

  // After fetch rework the word for the game
  useEffect(() => {
    setHangmanWord(buildHangmanWord(theWord));
  }, [theWord]);

  // Counts the number of (wrong) guesses.
  useEffect(() => {
    const tries: number = alphabetData.filter(
      (letter) => letter.interaction === LetterInteractionType.WrongGuess
    ).length;
    setNumberOfWrongGuesses(tries);

    const checkWin: boolean =
      hangmanWord.filter((letter) => letter.guessed === GuessType.Revealed)
        .length +
        hangmanWord.filter((letter) => letter.guessed === GuessType.Space)
          .length ===
      hangmanWord.length
        ? true
        : false;

    setWinCheck(checkWin);
  }, [alphabetData, hangmanWord]);

  const handleClick = (guessedLetter: string) => {
    const handledGuess = handleGuess(guessedLetter, hangmanWord, alphabetData);
    setHangmanWord([...handledGuess.HangmanWord]);
    setAlphabetData([...handledGuess.alphabet]);
  };

  return (
    <Container>
      <TheHanging numberOfTries={numberOfWrongGuesses} />
      <HangmanWord word={hangmanWord} wrongGuesses={numberOfWrongGuesses} />
      <LetterContainer>
        {/* TODO: Lock letters after too many numberOfWrongGuesses of after WIN */}
        {alphabetData.map((letter: Letter, id: number) => (
          <LetterButton
            key={id}
            letterData={letter}
            handleClick={handleClick}
            wrongGuesses={numberOfWrongGuesses}
            winCheck={winCheck}
          />
        ))}
      </LetterContainer>
    </Container>
  );
};

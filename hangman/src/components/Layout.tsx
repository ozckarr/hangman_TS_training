import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { TheHanging } from "./TheHanging";
import { LetterButton } from "./LetterButton";
import { HangmanWord } from "./HangmanWord";
import { Instructions } from "./Instructions";
import { Rematch } from "./Rematch";

import axios, { AxiosResponse, AxiosError } from "axios";

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
  justify-content: center;
`;

export const Layout: React.FC = () => {
  const [hangmanWord, setHangmanWord] = useState<Array<HangmanWordType>>([]);
  const [alphabetData, setAlphabetData] = useState<Array<Letter>>(alphabet());
  const [numberOfWrongGuesses, setNumberOfWrongGuesses] = useState<number>(0);
  const [winCheck, setWinCheck] = useState<boolean>(false);

  // After fetch rework the word for the game
  useEffect(() => {
    // TODO: create as module
    axios
      .get<Array<string>>("https://random-word-api.herokuapp.com/word?number=1")
      .then((response: AxiosResponse) => {
        setHangmanWord(buildHangmanWord(response.data[0]));
      })
      .catch((err: Error | AxiosError) => {
        console.log(err);
      });
  }, []);

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

  const handleRematch = () => {
    axios
      .get<Array<string>>("https://random-word-api.herokuapp.com/word?number=1")
      .then((response: AxiosResponse) => {
        setHangmanWord(buildHangmanWord(response.data[0]));
        setAlphabetData(alphabet());
        setNumberOfWrongGuesses(0);
        setWinCheck(false);
      })
      .catch((err: Error | AxiosError) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <TheHanging numberOfTries={numberOfWrongGuesses} />
      <HangmanWord word={hangmanWord} wrongGuesses={numberOfWrongGuesses} />
      <Instructions wrongGuesses={numberOfWrongGuesses} winCheck={winCheck} />
      <LetterContainer>
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
      <Rematch handleRematch={handleRematch} />
    </Container>
  );
};

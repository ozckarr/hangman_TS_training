import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Guesses } from "./Guesses";
import { TheHanging } from "./TheHanging";

import { LetterButton } from "./LetterButton";
import { alphabet, Letter, LetterInteractionType } from "../data/alphabet";

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
  const [theWord, setTheWord] = useState<string>("test"); // TODO: Fetch from https://random-word-api.herokuapp.com/home
  const [alphabetData, setAlphabetData] = useState<Array<Letter>>(alphabet);
  const [numberOfWrongGuesses, setNumberOfWrongGuesses] = useState<number>(0);

  useEffect(() => {
    //TODO: Fetch here later
  }, []);

  // Counts the number of (wrong) guesses.
  useEffect(() => {
    const tries: number = alphabetData.filter(
      (letter) => letter.interaction === LetterInteractionType.WrongGuess
    ).length;
    setNumberOfWrongGuesses(tries);
  }, [alphabetData]);

  return (
    <Container>
      <TheHanging numberOfTries={numberOfWrongGuesses} />
      <Guesses letter="korv" />
      <LetterContainer>
        {/* TODO: Lock letters after too many numberOfWrongGuesses of after WIN */}
        {alphabetData.map((letter: Letter, id: number) => (
          <LetterButton key={id} letterData={letter} />
        ))}
      </LetterContainer>
    </Container>
  );
};

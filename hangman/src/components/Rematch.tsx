import React from "react";
import styled from "styled-components";
import rematchImg from "../images/rematch.png";

interface RematchProps {
  handleRematch: () => void;
}
const Container = styled.img`
  width: 100%;
  padding-top: 0.5em;
  width: 2em;
`;

export const Rematch: React.FC<RematchProps> = ({ handleRematch }) => {
  return (
    <Container
      onClick={handleRematch}
      src={rematchImg}
      alt="rematch button"
    ></Container>
  );
};

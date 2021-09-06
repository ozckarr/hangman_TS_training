import React from "react";
import styled from "styled-components";

const Container = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
`;

export const Layout: React.FC = () => {
  return <Container>Hello</Container>;
};

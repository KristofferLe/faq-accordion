import React from "react";
import styled from "styled-components";

const AppWrapper = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Wrapper({ children }) {
  return <AppWrapper>{children}</AppWrapper>;
}

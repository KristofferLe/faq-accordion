import React from "react";
import styled from "styled-components";
import FaqBg from "../assets/faqBg.png";
import colors from "../styles/colors";

const StyledBackground = styled.main`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: start;
  background-color: ${colors.lightPink};
  img {
    height: 30%;
    width: 100%;
  }
`;

export default function Background() {
  return (
    <StyledBackground>
      <img src={FaqBg} alt="Background" />
    </StyledBackground>
  );
}

import React from "react";
import styled from "styled-components";
import colors from "../../styles/colors";
import { faqs } from "../../data.json";
import FAQ from "./faq";
import star from "../../assets/star.png";

const StyledCard = styled.section`
  background-color: ${colors.white};
  width: 100%;
  max-width: 600px;
  padding: 30px 32px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  box-shadow: 0 0 24px 8px rgba(0, 0, 0, 0.2);
  z-index: 50;
  margin: 20px;

  @media screen and (max-width: 768px) {
    font-size: .7rem;
    min-height: 568px;
    justify-content: space-around;
  }
`;

const CardHead = styled.header`
  display: flex;
  align-items: center;
  gap: 24px;
  h1 {
    font-size: 3.325rem;
  }
`;

const CardBody = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export default function FaqCard() {
  return (
    <StyledCard>
      <CardHead>
        <img src={star} alt="Star" />
        <h1>FAQs</h1>
      </CardHead>
      <CardBody>
        {faqs.map((faq) => (
          <FAQ faq={faq.question} answer={faq.answer} key={faq.id} />
        ))}
      </CardBody>
    </StyledCard>
  );
}

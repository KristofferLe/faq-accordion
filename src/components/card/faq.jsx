import React, { useState } from "react";
import styled from "styled-components";
import colors from "../../styles/colors";
import { AiFillMinusCircle as Minus } from "react-icons/ai";
import { AiFillPlusCircle as Plus } from "react-icons/ai";

const StyledFaq = styled.article`
  display: flex;
  flex-direction: column;
  gap: 24px;
  overflow: hidden;
  ${({ $isExpanded }) => ($isExpanded ? "height: 148px;" : "height: 48px;")}
  @media screen and (max-width: 768px) {
    ${({ $isExpanded }) => ($isExpanded ? "height: 200px;" : "height: 60px;")}
  }
  transition: all 0.3s ease-in-out;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 600;
    font-size: 1.1rem;
    gap: 48px;
    cursor: pointer;
    &:hover {
      color: ${colors.pink};
    }
    transition: all 0.4s ease;

    .icon {
      cursor: pointer;
      min-height: 24px;
      min-width: 24px;
    }

    .plus {
      color: ${colors.pink};
    }
  }

  article {
    line-height: 150%;
    font-size: 1rem;
    color: ${colors.palePurple};
  }
`;

export default function FAQ({ faq, answer }) {
  const [$isExpanded, setIsExpanded] = useState(false);
  const toggleExpanded = () => setIsExpanded(!$isExpanded);

  return (
    <StyledFaq $isExpanded={$isExpanded}>
      <span className="header" onClick={toggleExpanded}>
        <p>{faq}</p>
        {$isExpanded ? (
          <Minus className="icon minus" />
        ) : (
          <Plus className="icon plus" />
        )}
      </span>
      {$isExpanded && (
        <article>
          <p>{answer}</p>
        </article>
      )}
    </StyledFaq>
  );
}

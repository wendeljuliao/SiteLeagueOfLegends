import styled, { css } from "styled-components";

interface ICardContainer {
  active: boolean;
}

export const CardContainer = styled.div<ICardContainer>`
  width: 150px;
  height: 150px;

  border-radius: 10px;

  background-color: black;

  h1 {
    color: white;
  }

  ${({active}) => active && css`
    h1 {
      color: green;
    }
  `}
`
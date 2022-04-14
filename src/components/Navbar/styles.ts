import styled, { css } from "styled-components";

import { Link } from 'react-router-dom';

export interface Props {
  active?: boolean;
}

export const Container = styled.div`
  display: flex;
  
  justify-content: center;
  align-items: center;
  height: 80px;

  background-color: var(--dark-primary);
`

export const Content = styled.div`
  display: flex;
  
  flex-direction: row;

  justify-content: space-around;
  align-items: center;

  width: 100%;
  max-width: 1920px;
`

export const LeftSide = styled.div`
  img {
    width: 120px;

    object-fit: contain;
  }

`

export const RightSide = styled.div`

`

export const LinkItem = styled(Link)<Props>`
  color: var(--white);
  font-size: 1.5rem;
  
  margin: 0 .5rem;

  &:hover {
    color: #87AAFA;
  }

  ${props => 
    props.active && css`
      color: #87AAFA;
  `}

  text-decoration: none;
`
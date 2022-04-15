import styled, { css } from "styled-components";

import { Link } from 'react-router-dom';

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

  @media screen and (max-width: 768px) {
    justify-content: flex-start;
  }
`

export const LeftSide = styled.div`
  img {
    width: 120px;
    
    object-fit: contain;
  }
  
  @media screen and (max-width: 768px) {
    img {
      margin-left: 1rem;
    }
  }

`

export const RightSide = styled.div<{clicked: boolean}>`

  @media screen and (max-width: 768px) {
    display: ${({clicked}) => (clicked ? 'flex': 'none')};
    flex-direction: column;
    width: 100%;
    position: absolute;
    align-items: center;
    top: 80px;
    opacity: 1;
    background: var(--dark-primary);
    font-size: 1.8rem;
    z-index: 999;
    padding: 1rem 0;
  }
`

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    position: absolute;
    right: 0;
    transform: translate(-100%, 0);
    font-size: 1.8rem;

  }
`

export const LinkItem = styled(Link)<{$active?: boolean}>`
  color: var(--white);
  font-size: 1.5rem;
  
  margin: 0 .5rem;

  &:hover {
    color: #87AAFA;
  }

  ${props => 
    props.$active && css`
      color: #87AAFA;
  `}
  

  text-decoration: none;
`
import styled, { keyframes } from "styled-components";

const blinkCursor = keyframes`
  from {
    border-right-color: rgba(255, 255, 255, 0.75);
  } to {
    border-right-color: transparent;
  }
`

const typing = keyframes`
  from {
    width: 0;
  } to { 
    width: 90%;
  }
`

export const Container = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

  
  `

export const Image = styled.img`
  width: 100%;
  height: 100vh;
  
  object-fit: cover;
  object-position: center right;
  
  max-width: 1920px;
  
  `

export const Content = styled.div`
  display: flex;
  
  width: 100%;
  position: absolute;

  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 1920px;
`

export const Phrase = styled.p`
  font-size: 4.5vw;
  text-align: center;
  font-style: italic;
  color: var(--white);
  white-space: nowrap;
  overflow-x: hidden;
  //border-right: 2px solid rgba(255, 255, 255, 0.75);

  animation: ${typing} 3s steps(30) 1s normal both;
  
  &:nth-child(2) {
    animation: ${typing} 3s steps(30) 4s normal both;
  }

  &:nth-child(3) {
    animation: ${typing} 3s steps(30) 7s normal both;
  }

  @media screen and (max-width: 768px) {
    font-size: 4.75vw;
  }

`
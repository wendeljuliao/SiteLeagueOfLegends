import styled from 'styled-components';

export const CardContainer = styled.div`
  background-color: transparent;
  width: 200px;
  height: 300px;

  border: 1px solid black;
  border-radius: 8px;

  perspective: 1000px;
  
  &:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

`

export const ContentCard = styled.div`
  position: relative;

  width: 200px;
  height: 100%;
  

  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;

`

export const FrontCard = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;

  background-color: #bbb;
  color: black;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    
  }
`

export const BackCard = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;

  background-color: var(--dark-primary);
  color: white;
  transform: rotateY(180deg);
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  

  h1 {
    padding: 0 5px;
    font-weight: bold;
    font-size: 1.8rem;
  }

  h2 {
    padding: 0 5px;
    font-weight: 500;
    font-size: 1.5rem;
  }
  p{
    padding: 0 5px;
    font-weight: 400;
    font-size: 1.2rem;
  }


`

import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroller";


export const Container = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  
  position: relative;
  
` 

export const ContentGrid = styled.div`
  display: grid;
  
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px 20px;

  max-width: 1920px;

  padding: 2rem 0;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    display: none;
    
  }

`

export const ScrollContent = styled(InfiniteScroll)`
display: grid;
  
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px 20px;

  max-width: 1920px;

  padding: 2rem 0;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    display: none;
    
  }
`

export const ContentMobile = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    overflow: hidden;

    padding: 1rem .1rem 1rem 1rem;

    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;

    .rows {
      display: flex;
      flex-wrap: nowrap;
      overflow-x: auto;
      overflow-y: hidden;

      grid-gap: 10px;

      padding: 2rem 0 .5rem;

      position: relative;

      justify-content: left;
      align-items: center;
      flex-direction: row;
      width: 100%;
    }
  }

`
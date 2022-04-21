import styled from "styled-components";

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
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    overflow-y: hidden;

    position: relative;

    justify-content: left;
    align-items: center;
    flex-direction: row;
    
    width: 90%;
    
  }


`
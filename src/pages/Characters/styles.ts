import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  
` 

export const ContentGrid = styled.div`
  display: grid;

  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;

  max-width: 1920px;

  padding: 2rem 0;
`
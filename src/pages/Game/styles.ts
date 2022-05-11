import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 1rem 0;
  
`

export const Board = styled.div`
  display: grid;

  align-items: center;
  justify-items: center;

  height: 800px;
  width: 800px;

  border-radius: 5px;

  background-color: red;
  
  grid-template-columns: repeat(4, 1fr);


`
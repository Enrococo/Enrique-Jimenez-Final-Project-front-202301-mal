import styled from 'styled-components';

export const CustomizeStyled = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 50% 50%;

  .columnOne {
    justify-content: center;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
  }
  .columnTwo {
    justify-content: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;

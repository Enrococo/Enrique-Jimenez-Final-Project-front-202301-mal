import styled from 'styled-components';

export const CustomizeStyled = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 100%;
  @media screen and (max-width: 1040px) {
    display: flex;
    flex-direction: column;
    overflow: scroll;
  }

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

  .custom__title {
    padding: 1rem;
    width: 100%;
    text-align: start;
  }

  .custom__subtitle {
    padding: 1rem 2rem;
    width: 90%;
    min-width: 45%;
    text-align: start;
  }
`;

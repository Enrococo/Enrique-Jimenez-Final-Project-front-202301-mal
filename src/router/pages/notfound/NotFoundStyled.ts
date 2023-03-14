import styled from 'styled-components';

export const NotFoundStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;

  .image {
    max-width: 80%;
  }
  .title {
    justify-self: center;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    font-size: 3rem;
    color: #fafaff;
  }
  .text {
    display: flex;
    justify-content: center;
    font-size: 2rem;
    color: #ffe81f;
    font-family: 'Roboto', sans-serif;
  }
`;

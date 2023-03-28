import styled from 'styled-components';

export const LoadingStyled = styled.div`
  .carpets__container {
    background-color: rgba(255, 255, 255, 0.2);
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  .loading-gif {
    width: 40%;
    aspect-ratio: 1/1;
  }
`;

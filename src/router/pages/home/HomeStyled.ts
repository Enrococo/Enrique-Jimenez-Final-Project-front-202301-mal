import styled from 'styled-components';

export const HomeStyled = styled.div`
  justify-content: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 3rem;
  gap: 3rem;
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url('/assets/images/estora-home.webp');
  background-size: auto;
  background-repeat: no-repeat;

  .estora-gif {
    height: 40vmin;
    pointer-events: none;
  }

  .Wip {
    letter-spacing: 2px;
    font-family: 'Roboto-Medium';
    color: white;
  }

  .Hook {
    font-size: 3rem;
    color: white;
  }

  .create__button {
    font-size: large;
    background-color: var(--color-tertiary);
    color: white;
    border: none;
    border: 2px solid var(--color-tertiary);
    padding: 10px 20px;
    border-radius: 6px;
    cursor: pointer;
  }

  .create__button:hover {
    font-size: large;
    background-color: white;
    color: var(--color-tertiary);
    border: 2px var(--color-tertiary);
    padding: 10px 20px;
    border-radius: 6px;
  }
`;

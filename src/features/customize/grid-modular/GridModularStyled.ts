import styled from 'styled-components';

export const GridModularStyled = styled.div`
  max-width: 80%;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-gap: 15px;
  box-sizing: content-box;
  margin: 1.5rem;
  cursor: -moz-grab;

  :active {
    cursor: -moz-grabbing;
  }

  .modular-item {
    width: 100%;
    background-color: var(--color-secondary-clear);
    border: 3px solid var(--color-secondary-clear);
    :hover {
      border: 3px solid var(--color-tertiary);
    }
  }
`;

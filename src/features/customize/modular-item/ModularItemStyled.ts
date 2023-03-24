import styled from 'styled-components';

export const ModularItemStyled = styled.div`
  width: fit-content;
  cursor: grab;
  background: var(--color-secondary-clear);
  width: 25%;
  aspect-ratio: 1/1;
  border: 4px solid var(--color-tertiary);

  :active {
    cursor: grabbing;
  }

  .itemImg {
    width: 100%;
  }
`;

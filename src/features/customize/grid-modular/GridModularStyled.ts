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
    background-color: #deded4;
    border: 3px solid #deded4;
    :hover {
      border: 3px solid #ff7a3d;
    }
  }
`;

import styled from 'styled-components';

export const CardStyled = styled.div`
  display: grid;
  width: 250px;
  height: 300px;
  background: var(--color-tertiary-disabled);
  border-radius: 3px;
  gap: 5px;
  padding: 10px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.7);
  overflow: hidden;
  align-items: center;
  justify-items: center;

  :hover::after {
    left: 100%;
  }

  .image-container {
    width: 100%;
    aspect-ratio: 1/1;
    overflow: hidden;
  }

  .image {
    mix-blend-mode: multiply;
    width: 100%;
    justify-self: center;
  }

  .info {
    display: flex;
    flex-direction: column;

    font-family: 'Montserrat', Times, serif, sans-serif;
    color: var(--color-secondary);
    width: 100%;
  }
  .properties {
    width: 100%;
  }

  .property {
    font-size: smaller;
  }

  .property__name {
    font-weight: bolder;
  }
`;

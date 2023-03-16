import styled from 'styled-components';

export const LoginPageStyled = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  text-align: center;
  padding: 0rem;
  gap: 2.5%;
  background-color: white;

  .piledstora__img {
    width: 50%;
  }

  @media screen and (max-width: 768px) {
    justify-content: center;
    background-image: url('/assets/images/estora-piled.JPG');
    background-size: 100%;
    background-position: 50%;
    padding: 100px 0px;
    .piledstora__img {
      display: none;
    }
  }
`;

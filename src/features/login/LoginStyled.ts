import styled from 'styled-components';

export const LoginStyled = styled.form`
  width: 500px;
  background-color: rgba(240, 248, 255, 0.6);
  border: 1px solid rgba(0, 0, 0, 0.472);
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
  padding: 2rem;
  gap: 1.6rem;
  color: white;
  display: flex;
  flex-direction: column;
  max-width: 45%;
  position: relative;
  display: flex;
  align-items: flex-start;

  @media screen and (max-width: 768px) {
    max-width: 90%;
  }

  .register__button {
    background-color: #ff7a3d;
    color: white;
    border: none;
    padding: 4px 30px;
    border-radius: 6px;
  }
`;

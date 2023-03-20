import styled from 'styled-components';

export const LoginStyled = styled.form`
  width: 500px;
  background-color: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(0, 0, 0, 0.472);
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
  padding: 2rem;
  gap: 1.6rem;
  color: white;
  display: flex;
  flex-direction: column;
  max-width: 45%;
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

  .info {
    font-size: small;
    font-weight: bolder;
    position: absolute;
    transform: translate(0, -120%);
  }

  .error {
    color: red;
  }

  .login {
    background-color: white;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 85%;
    height: 75%;
    position: absolute;
    color: green;
    justify-content: center;
  }

  .default {
    visibility: hidden;
  }

  .loading {
    color: black;
  }
`;

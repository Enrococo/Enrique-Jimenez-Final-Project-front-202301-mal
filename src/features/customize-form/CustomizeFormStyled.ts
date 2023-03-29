import styled from 'styled-components';

export const CustomizeFormStyled = styled.form`
  width: 90%;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  padding: 1rem 2rem;
  gap: 1rem;
  color: white;
  display: flex;
  flex-direction: column;
  min-width: 45%;
  display: flex;
  align-items: flex-start;

  @media screen and (max-width: 768px) {
    max-width: 90%;
  }

  .create__button {
    background-color: var(--color-tertiary);
    color: white;
    border: none;
    padding: 4px 50px;
    border-radius: 6px;
    font-size: large;
    border: 2px solid var(--color-tertiary);
    :disabled {
      background-color: var(--color-tertiary-disabled);
    }
    :hover {
      background-color: white;
      color: var(--color-tertiary);
      border: 2px solid var(--color-tertiary);
    }
  }

  .info {
    font-size: larger;
    font-weight: 400;
  }

  .error {
    color: red;
  }

  .success {
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

  .success_text {
    color: green;
  }
  .default {
    visibility: hidden;
  }

  .loading {
    color: black;
  }

  .customize-form__price {
    border: none;
    background: none;
    font-size: x-large;
    text-justify: start;
    padding: 5px;
    align-self: flex-end;
    font-family: 'Montserrat', sans-serif;
    font-weight: bolder;
  }

  .customize-form__name {
    border-width: 0 0 2px 0;
    width: 100%;
    background: none;
    font-size: x-large;
  }
  .customize-form__name:focus,
  .customize-form__price:focus {
    outline: none;
  }

  .create__button-container {
    max-width: 100%;
    display: flex;
  }

  .customize-form__price__button-containter {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 10%;
    justify-content: space-between;
  }

  .customize-form__price-input {
    width: 30%;
  }

  .customize-form__name__container {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
  }

  .customize-form__title {
    text-align: start;
  }
`;

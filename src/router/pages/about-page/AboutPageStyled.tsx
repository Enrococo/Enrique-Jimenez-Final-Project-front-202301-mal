import styled from 'styled-components';

export const AboutStyled = styled.div`
  height: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 50% 50%;
  background-color: var(--color-secondary-clear);
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 3rem;
  gap: 3rem;
  @media screen and (max-width: 1040px) {
    height: 100%;
    display: flex;
    flex-direction: column-reverse;
    .about-columnOne {
      width: 100%;
    }
    .about-columnTwo {
      font-size: medium;
    }
  }

  .about-columnOne {
    height: 100%;
    overflow: hidden;
  }

  .about-columnTwo {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    text-align: start;
  }

  .about_ssnn {
    display: flex;
    gap: 10px;
    font-size: medium;
  }

  .about__ssnn-icon {
    width: 20px;
  }
`;

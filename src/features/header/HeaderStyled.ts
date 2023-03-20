import styled from 'styled-components';

interface HeaderProps {
  isHeaderOpen: boolean;
}

export const HeaderStyled = styled.div`
  position: sticky;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--bg-color-primary);
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
  padding: 0.8rem 1.5rem 0.5rem;
  gap: 1.6rem;
  color: var(--color-secondary);

  .estora__logo-face {
    display: none;
  }

  .menu__container {
    display: flex;
    gap: 20px;
  }

  ul.menu__container li ul {
    max-width: fit-content;
    max-height: 0;
    margin: 0;
    padding: 7px;
    list-style: none;
    display: none;
  }

  ul.menu__container li:hover ul {
    position: absolute;
    display: block;
    right: 1%;
    max-height: 300px;
    background-color: var(--bg-color-primary);
  }

  @media screen and (max-width: 768px) {
    .menu__container {
      display: none;
    }
  }

  @media screen and (max-width: 495px) {
    .estora__logo {
      display: none;
    }

    .estora__logo-face {
      display: block;
    }
  }
`;

export const HeaderButton = styled.button`
  display: grid;
  border: none;
  z-index: 999;
  top: 0;
  right: 0;
  gap: 10px;
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
  .hamburger-btn__line {
    width: 30px;
    height: 3px;
    display: block;
    background-color: var(--color-secondary);
    border-radius: 1.5px;
    transition: var(--transition-medium);
  }
  &.active .hamburger-btn__line:nth-child(1) {
    transform: translateY(13px) rotate(45deg);
  }
  &.active .hamburger-btn__line:nth-child(2) {
    opacity: 0;
  }
  &.active .hamburger-btn__line:nth-child(3) {
    transform: translateY(-13px) rotate(-45deg);
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const HeaderContainer = styled.header<HeaderProps>`
  width: 100%;
  height: 100%;
  position: fixed;

  z-index: 100;
  ${({ isHeaderOpen }: HeaderProps) =>
    isHeaderOpen
      ? `
    right: 0;
  `
      : `
    right: 100%;
  `}
  transition: var(--transition-long);
  .header__navbar {
    width: 100%;
    height: 100%;
    transition: var(--transition-medium);
    .header__navbar__links-list {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10%;
      padding: 2px 0;
      @supports ((backdrop-filter: none) or (-webkit-backdrop-filter: none;)) {
        background-color: var(--bg-color-primary);
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
      }
      .header__navbar__link-item {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: var(--font-size-m);
        color: var(--color-secondary);

        .header__navbar__link-text:hover {
          text-decoration: underline;
        }
        .active {
          font-family: var(--font-family-inter-bold);
          border-bottom: 3px solid var(--color-tertiary);
        }
      }
    }
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

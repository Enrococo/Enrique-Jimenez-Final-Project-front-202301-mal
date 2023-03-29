import { HeaderButton, HeaderContainer, HeaderStyled } from './HeaderStyled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuBtnClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderStyled>
      <Link to={'/'}>
        <img
          src="/assets/images/estora-logo-bn.svg"
          alt="estora-logo"
          className="estora__logo"
        />
        <img
          src="/assets/images/estora-logo-face.svg"
          alt="estora-logo"
          className="estora__logo-face"
        />
      </Link>
      <ul className="menu__container">
        <li>
          <Link className="menu__link" to={'/nosotros'}>
            Sobre Nosotros
          </Link>
        </li>{' '}
        <li>
          <Link className="menu__link" to={'/allcarpets'}>
            Tus Modular
          </Link>
        </li>
        <li className="user">
          <Link to={'#'}>
            <FontAwesomeIcon icon={faUser} />
          </Link>
          <ul>
            <li>
              <Link to={'/login'}> Inicia sesión</Link>
            </li>
            <li>
              <Link to={'/register'}> Regístrate</Link>
            </li>
          </ul>
        </li>
      </ul>
      <HeaderButton
        className={isOpen ? 'active' : ''}
        type="button"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        onClick={() => handleMenuBtnClick()}
      >
        <span className="hamburger-btn__line" />
        <span className="hamburger-btn__line" />
        <span className="hamburger-btn__line" />
      </HeaderButton>

      <HeaderContainer isHeaderOpen={isOpen}>
        <nav className="header__navbar">
          <ul className="header__navbar__links-list">
            <li className="header__navbar__link-item">
              <Link
                aria-label="home"
                onClick={() => handleMenuBtnClick()}
                className="header__navbar__link-text"
                to={'/'}
              >
                Home
              </Link>
            </li>
            <li className="header__navbar__link-item">
              <Link
                aria-label="tu-modular"
                onClick={() => handleMenuBtnClick()}
                className="header__navbar__link-text"
                to={'/allcarpets'}
              >
                Tus Modular
              </Link>
            </li>
            <li className="header__navbar__link-item">
              <Link
                aria-label="nosotros"
                onClick={() => handleMenuBtnClick()}
                className="header__navbar__link-text"
                to={'/nosotros'}
              >
                Nosotros
              </Link>
            </li>
            <li className="header__navbar__link-item">
              <Link
                aria-label="login"
                onClick={() => handleMenuBtnClick()}
                className="header__navbar__link-text"
                to={'/login'}
              >
                Accede
              </Link>
            </li>
            <li className="header__navbar__link-item">
              <Link
                aria-label="register"
                onClick={() => handleMenuBtnClick()}
                className="header__navbar__link-text"
                to={'/register'}
              >
                Regístrate
              </Link>
            </li>
          </ul>
        </nav>
      </HeaderContainer>
    </HeaderStyled>
  );
};

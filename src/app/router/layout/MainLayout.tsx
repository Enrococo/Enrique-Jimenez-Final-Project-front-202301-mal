import { Outlet } from 'react-router-dom';
import { LayoutStyled } from './MayLayoutStyled';

const MainLayout = () => {
  return (
    <LayoutStyled>
      <img
        className="logo__header"
        src="/assets/images/estora-logo.svg"
        alt="estora_logo"
      />
      <main>
        <Outlet />
      </main>
      <footer className="layout__footer">Made by @enrococo</footer>
    </LayoutStyled>
  );
};

export default MainLayout;

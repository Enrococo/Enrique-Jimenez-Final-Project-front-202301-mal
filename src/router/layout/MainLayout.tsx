import { Outlet } from 'react-router-dom';
import { Header } from '../../features/header/Header';
import { LayoutStyled } from './MayLayoutStyled';

const MainLayout = () => {
  return (
    <LayoutStyled>
      <Header />

      <Outlet />

      <footer className="layout__footer">Made by @enrococo</footer>
    </LayoutStyled>
  );
};

export default MainLayout;

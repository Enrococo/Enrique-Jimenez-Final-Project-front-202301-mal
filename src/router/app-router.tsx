import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import { CarpetsPage } from './pages/carpets/CarpetsPage';
import { CustomizePage } from './pages/customize/Customize';
import { Home } from './pages/home/Home';
import { LoginPage } from './pages/login-page/LoginPage';
import { NotFound } from './pages/notfound/NotFound';
import { RegisterPage } from './pages/register-page/RegisterPage';
import { AboutPage } from './pages/who-page/AboutPage';
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFound />,

    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/register',
        element: <RegisterPage />,
      },
      {
        path: '/customize',
        element: <CustomizePage />,
      },
      {
        path: '/allcarpets',
        element: <CarpetsPage />,
      },
      {
        path: '/nosotros',
        element: <AboutPage />,
      },
    ],
  },
]);
export default router;

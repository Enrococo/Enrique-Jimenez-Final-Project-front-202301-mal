import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import { CustomizePage } from './pages/customize/Customize';
import { Home } from './pages/home/Home';
import { LoginPage } from './pages/login-page/LoginPage';
import { NotFound } from './pages/notfound/NotFound';
import { RegisterPage } from './pages/register-page/RegisterPage';
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
    ],
  },
]);
export default router;

import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import { Home } from './pages/home/Home';
import { LoginPage } from './pages/login-page/LoginPage';
import { NotFound } from './pages/notfound/NotFound';
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
    ],
  },
]);
export default router;

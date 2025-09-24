import { lazy } from 'react';
import ROUTES from '../../routes/RoutePaths';

const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LandingPage = lazy(() => import('./pages/LandingPage'));
const ResetPassword = lazy(() => import('./pages/ResetPassword'));

const authRoutes = [
    {
        path: ROUTES.HOME,
        element: <LandingPage />,
    },
    {
        path: ROUTES.LOGIN,
        element: <LoginPage />,
    },
    {
        path: ROUTES.REGISTER,
        element: <RegisterPage />,
    },
    {
        path: ROUTES.RESET,
        element: <ResetPassword />,
    }
];

export default authRoutes;

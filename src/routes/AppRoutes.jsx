import { useRoutes } from "react-router-dom";
import { Suspense } from "react";
import  authRoutes  from "../features/auth/authRoutes";
import  { dashboardRoutes }  from "../features/dashboard/dashboardRoutes";
import LoadingSpinner from "../shared/components/LoadingSpinner";
import NotFound from "../shared/components/NotFound";

export default function AppRoutes({ isAuthenticated }) {
  const routes = [
    ...authRoutes,
    ...dashboardRoutes,
    { path: "*", element: <NotFound /> },
  ];

  const element = useRoutes(routes);

  return <Suspense fallback={<LoadingSpinner />}>{element}</Suspense>;
}

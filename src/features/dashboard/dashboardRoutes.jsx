import { lazy } from "react";
import ROUTES from "../../routes/RoutePaths";
import ProtectedRoute from "../../routes/ProtectedRoute";

const DashboardLayout = lazy(() => import("./components/DashboardLayout"));
const DashboardHome = lazy(() => import("./pages/DashboardHome"));
const Profile = lazy(() => import("./pages/Profile"));

export const dashboardRoutes = [
  {
    path: ROUTES.DASHBOARD,
    element: (
      <ProtectedRoute isAuthenticated={true}>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true, // 👈 /dashboard
        element: <DashboardHome />,
      },
      {
        path: "profile", // 👈 /dashboard/profile
        element: <Profile />,
      },
    ],
  },
];

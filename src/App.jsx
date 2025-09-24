import React from "react";
import { Suspense } from "react";
import AppRoutes from "./routes/AppRoutes";
import LoadingSpinner from "./shared/components/LoadingSpinner";

export default function App() {
  // later you can pass down real authentication state
  const isAuthenticated = false; 

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <AppRoutes isAuthenticated={isAuthenticated} />
    </Suspense>
  );
}

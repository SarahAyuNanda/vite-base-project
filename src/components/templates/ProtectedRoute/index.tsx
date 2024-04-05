import { Navigate, Outlet } from "react-router-dom";

import useProtectedRoute from "@/components/templates/ProtectedRoute/index.controller";

import { ROUTES } from "@/utils/constant";

export const ProtectedRoute = () => {
  const { token, isPathFound } = useProtectedRoute();

  return (
    <>
      {token && isPathFound ? (
        <>
          <Outlet />
        </>
      ) : (
        <Navigate
          to={ROUTES.BASE_URL}
          replace
        />
      )}
    </>
  );
};

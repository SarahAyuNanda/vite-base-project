import { Navigate, Outlet } from "react-router-dom";

import usePublicRoute from "@/components/templates/PublicRoute/index.controller";

import { ROUTES } from "@/utils/constant";

export const PublicRoute = () => {
  const { token } = usePublicRoute();

  if (token) {
    return (
      <Navigate
        to={ROUTES.BASE_URL}
        replace
      />
    );
  } else {
    return (
      <>
        <Outlet />
      </>
    );
  }
};

import { useLocation } from "react-router-dom";

import { protectedPage } from "@/routes/data/protected";

import { getDecrypt } from "@/utils/helper";

const useProtectedRoute = () => {
  const { pathname } = useLocation();
  const token = getDecrypt({ key: "token" });

  const isPathFound = protectedPage.filter((page) => page.path === pathname).length !== 0;

  return {
    token,
    isPathFound,
  };
};

export default useProtectedRoute;

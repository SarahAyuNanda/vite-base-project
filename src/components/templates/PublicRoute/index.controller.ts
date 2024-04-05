import { useLocation } from "react-router-dom";

import { publicPage } from "@/routes/data/public";

import { getDecrypt } from "@/utils/helper";

const usePublicRoute = () => {
  const { pathname } = useLocation();
  const token = getDecrypt({ key: "token" });

  const isPathFound = publicPage.filter((page) => page.path === pathname).length !== 0;

  return {
    token,
    isPathFound,
  };
};

export default usePublicRoute;

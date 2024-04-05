import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { ProtectedRoute, PublicRoute } from "@/components/templates";

import { protectedPage } from "@/routes/data/protected";
import { publicPage } from "@/routes/data/public";

import { ROUTES } from "@/utils/constant";

const renderLoading = () => <div></div>;

function AppRoutes() {
  return (
    <Routes>
      {/* ---------------------------- Protected Routes ---------------------------- */}
      <Route
        path={ROUTES.BASE_URL}
        element={<ProtectedRoute />}
      >
        {protectedPage.map((page) => {
          return (
            <Route
              key={page.path}
              path={page.path}
              element={<Suspense fallback={renderLoading()}>{page.element}</Suspense>}
            />
          );
        })}
      </Route>

      {/* ----------------------------- Public Routes ----------------------------- */}
      <Route
        path={ROUTES.BASE_URL}
        element={<PublicRoute />}
      >
        {publicPage.map((page) => {
          return (
            <Route
              key={page.path}
              path={page.path}
              element={<Suspense fallback={renderLoading()}>{page.element}</Suspense>}
            />
          );
        })}
      </Route>

      {/* ------------------------------ 404 Routes ------------------------------ */}
      <Route
        path={"*"}
        element={<h1>404 Not Found</h1>}
      />
    </Routes>
  );
}

export default AppRoutes;

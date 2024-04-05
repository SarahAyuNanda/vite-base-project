import { lazy } from "react";

import { Example } from "@/pages";

import { ROUTES } from "@/utils/constant";

const onRenderImportPage = (page: () => React.JSX.Element) => {
  return lazy(() => import("@/pages").then(() => ({ default: page })));
};

/* ----------------------------- Registered Page ---------------------------- */
const ExamplePage = onRenderImportPage(Example);

/* --------------------------------- Routes --------------------------------- */
export const protectedPage = [
  {
    path: ROUTES.BASE_URL,
    element: <ExamplePage />,
  },
];

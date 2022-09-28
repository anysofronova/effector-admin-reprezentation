import { RouterProvider } from "atomic-router-react";

import { RootRoutes, router } from "./routing";

export const Application = () => {
  return (
    <RouterProvider router={router}>
      <RootRoutes />
    </RouterProvider>
  );
};

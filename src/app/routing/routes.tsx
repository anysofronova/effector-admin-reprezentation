import { createHistoryRouter } from "atomic-router";
import { Route } from "atomic-router-react";
import { createBrowserHistory } from "history";

import { SignInPage } from "@/pages/auth/signIn";
import { SignUpPage } from "@/pages/auth/signUp";
import { DashboardPage } from "@/pages/dashboard";
import { HomePage } from "@/pages/home";
import { MainLayout } from "@/shared/ui/layouts";

const routes = [
  { path: "/login", route: [SignInPage.route] },
  { path: "/register", route: [SignUpPage.route] },
  { path: "/dashboard", route: [DashboardPage.route] },
  { path: "/", route: HomePage.route },
  // { path: "/article/:id", route: ArticlePage.route },
  // { path: "/404", route: NotFoundPage.route },
];

export const router = createHistoryRouter({ routes });
const history = createBrowserHistory();
router.setHistory(history);

export const RootRoutes = () => {
  return (
    <>
      <Route route={SignInPage.route} view={SignInPage.View} />
      <Route route={SignUpPage.route} view={SignUpPage.View} />
      <MainLayout>
        <Route route={HomePage.route} view={HomePage.View} />
        <Route route={DashboardPage.route} view={DashboardPage.View} />
      </MainLayout>
    </>
  );
};

// const toHomePage = createEffect(() => HomePage.route.open({}));
// const toNotFoundPage = createEffect(() => NotFoundPage.route.open({}));

// sample({
//   source: router.routeNotFound,
//   target: toNotFoundPage,
// });
//
// sample({
//   source: NotFoundPage.route.closed,
//   target: toHomePage,
// });

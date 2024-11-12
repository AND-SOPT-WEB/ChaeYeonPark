import routePath from "./routePath";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignupPage from "../pages/SignupPage/SignupPage";
import { RouteType } from "../types/routeType";

const authRoutes: RouteType[] = [
  { path: routePath.LOGIN, element: <LoginPage /> },
  { path: routePath.SIGNUP, element: <SignupPage /> },
];

export default authRoutes;

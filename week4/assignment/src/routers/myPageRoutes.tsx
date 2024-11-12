import routePath from "./routePath";
import MyPage from "../pages/MyPage/MyPage";
import { RouteType } from "../types/routeType";

const myPageRoutes: RouteType[] = [
  {
    path: routePath.MYPAGE,
    element: <MyPage />,
  },
];

export default myPageRoutes;

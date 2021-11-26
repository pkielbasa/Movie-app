import Home from "../pages/Home";
import Login from "../pages/Login";
import Best from "../pages/Best";


export const routes = [
  {
    path: "/",
    exact: true,
    component: <Home />,
    title: "Home",
    isHeaderElement: true,
  },
  {
    path: "/login",
    exact: false,
    component: <Login />,
    title: "Login",
    isHeaderElement: true,
  },
  {
    path: "/best",
    exact: false,
    component: <Best />,
    title: "Best",
    isHeaderElement: true,
  },
];

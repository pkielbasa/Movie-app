import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Best from "../pages/Best";
import Signup from "../pages/Signup"
import Details from "../pages/Details"
import Add from "../pages/Add"
export const routes = [
  {
    path: "/",
    exact: true,
    component: <Home />,
    title: "Home",
    isHeaderElement: true,
  },
  {
    path: "/signin",
    exact: false,
    component: <Signin />,
    title: "Sign In",
    isHeaderElement: true,
  },
  {
    path: "/signup",
    exact: false,
    component: <Signup />,
    title: "Sign Up",
    isHeaderElement: true,
  },
  {
    path: "/best",
    exact: false,
    component: <Best />,
    title: "Best",
    isHeaderElement: true,
  },
  {
    path: "/details",
    exact: false,
    component: <Details />,
    title: "Details",
    isHeaderElement: false,
  },
  {
    path: "/add",
    exact: false,
    component: <Add />,
    title: "Add new film",
    isHeaderElement: true,
  },
];

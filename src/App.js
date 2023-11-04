import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./component/Home/Home";
import ErrorPage from "./ErrorPage";
import Login from "./component/Login/Login";
import Signup from "./component/Signup/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup",
    element: <Signup />,
    errorElement: <ErrorPage />,
  },
]);

export default router;

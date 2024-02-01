import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home";
import Details from "../Page/Details/Details";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
        {
            path: '/',
            element: <Home/>,
        },
        {
          path: "details/:id",
          element: <Details/>
        }
    ]
  },
]);

export default Routes

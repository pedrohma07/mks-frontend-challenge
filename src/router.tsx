/*  eslint-disable */
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import AppLayout from "./layout/App.layout";


export const Router = createBrowserRouter([
    {
      path: "/",
      element: (
          <AppLayout />
      ),
      children: [
        {
          path: "/",
          element: <Home />
        }
      ]
    }
  ]);


  export default Router;
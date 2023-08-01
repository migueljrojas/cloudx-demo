import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./layouts";
import { CustomerInfo, CustomerSearch } from "./pages";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <CustomerSearch />
      },
      {
        path: "/customerInfo",
        element: <CustomerInfo />
      }
    ]
  }
])
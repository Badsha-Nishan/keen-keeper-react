import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from "./layout/RootLayout";
import Homepage from "./pages/homepage/Homepage";
import TimeLinePage from "./pages/timelinepage/TimeLinePage";
import StatsPage from "./pages/statspage/StatsPage";
import ErrorPage from "./pages/errorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Homepage,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/timeline",
        Component: TimeLinePage,
      },
      {
        path: "/stats",
        Component: StatsPage,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import Root from "./Root";
import ErrorPage from "./ErrorPage";
import Home from "./Home";
import WhyUsPage from "./WhyusPage";
import { DataProvider } from "./service/context";

const queryClient = new QueryClient();

// Define the type for routes

export const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/why",
        element: <WhyUsPage />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <DataProvider>
        <RouterProvider router={router} />
      </DataProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import Root from "./Root";
// import Home from "./Home";
// import WhyUsPage from "./WhyusPage";
import { DataProvider } from "./service/context";
// import HubSearch from "./HubSearch";
import ProtectedRoute from "./ProtectedRoute";
import { UserAuthProvider } from "./context/AuthContext";
import Spinner from "./components/Spinner";

const Home = React.lazy(() => import("./Home"));
const WhyUsPage = React.lazy(() => import("./WhyusPage"));
const ErrorPage = React.lazy(() => import("./ErrorPage"));
const HubSearch = React.lazy(() => import("./HubSearch"));
const Login = React.lazy(() => import("./Login"));
const Register = React.lazy(() => import("./Register"));
// Define the type for routes
const queryClient = new QueryClient();

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
      {
        path: "/hubsearch",
        element: (
          <ProtectedRoute>
            <HubSearch />
          </ProtectedRoute>
        ),
        errorElement: <ErrorPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <ErrorPage />,
  },
]);

// const Subscribed: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [user, setUser] = useState<any>(null);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setUser(user);
//       } else {
//         setUser(null);
//       }
//     });

//     return () => unsubscribe();
//   }, []);

//   return <>{children}</>;
// };

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <DataProvider>
        <UserAuthProvider>
          <React.Suspense fallback={<Spinner />}>
            <RouterProvider router={router} />
          </React.Suspense>
        </UserAuthProvider>
      </DataProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

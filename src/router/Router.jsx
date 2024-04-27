import { createBrowserRouter } from "react-router-dom";
import Root from "../components/layout/Root";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Links from "../pages/Links";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: (
      <>
        <Header />
        <ErrorPage />
        <Footer />
      </>
    ),
    children: [
      { path: "", element: <Home /> },
      { path: "links", element: <Links /> },
    ],
  },
]);

export default router;

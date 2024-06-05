import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import "./index.css";
import About from "./components/about/About.jsx";
import Contact from "./components/contact/Contact.jsx";
import Home from "./components/home/Home.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Infromations } from "./components/gethub/GitHub.jsx";
import GitHub from "./components/gethub/GitHub.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "contact_us",
        element: <Contact />,
      },
      {
        path: "github",
        element: <GitHub />,
        loader: Infromations,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

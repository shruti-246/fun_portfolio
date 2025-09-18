import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";  // ✅ important
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./pages/landing";
import Recruiter from "./pages/Recruiter";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
const router = createBrowserRouter([
  { path: "/", element: <Landing /> },
  { path: "/recruiter", element: <Recruiter /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
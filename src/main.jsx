// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Landing from "./pages/landing";
import Recruiter from "./pages/Recruiter";
import Skills from "./pages/Skill";
import Projects from "./pages/Proj";
import Experience from "./pages/Exp";
import Certifications from "./pages/Cert";
import Contact from "./pages/Cont";
import WorkPermit from "./pages/Work_permit";
import Recommendations from "./pages/Recom";

const router = createBrowserRouter([
  { path: "/", element: <Landing /> },
  { path: "/recruiter", element: <Recruiter /> },
  { path: "/skills", element: <Skills /> },
  { path: "/projects", element: <Projects /> },
  { path: "/experience", element: <Experience /> },
  { path: "/certifications", element: <Certifications /> },
  { path: "/contact", element: <Contact /> },
  { path: "/work-permit", element: <WorkPermit /> },
  { path: "/recommendations", element: <Recommendations /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

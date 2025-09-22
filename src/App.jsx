import { Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import Recruiter from "./pages/Recruiter";
import Skills from "./pages/Skill";
import WorkPermit from "./pages/Work_permit";
import Experience from "./pages/Exp";
import Certifications from "./pages/Cert";
import Recommendations from "./pages/Recom";
import Projects from "./pages/Proj";
import Contact from "./pages/Cont";
import InProgress from "./pages/InProgress";

function App() {
  return (
      <Routes>
        {/* Home / Landing */}
        <Route path="/" element={<Landing />} />

        {/* Recruiter profile main page */}
        <Route path="/recruiter" element={<Recruiter />} />

        {/* Sub-pages for Top Picks */}
        <Route path="/skills" element={<Skills />} />
        <Route path="/work-permit" element={<WorkPermit />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/recommendations" element={<Recommendations />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        {/* Profiles still under construction */}
        <Route path="/stalker" element={<InProgress />} />
        <Route path="/developer" element={<InProgress />} />
        <Route path="/researcher" element={<InProgress />} />
        {/* Catch-all for anything not matched */}
        <Route path="*" element={<InProgress />} />
      </Routes>
  );
}

export default App;





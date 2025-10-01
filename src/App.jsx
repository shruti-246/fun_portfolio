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
import InProgress from "./components/InProgress";

import Developer from "./pages/Developer";
import ProjDev from "./pages/ProjDev";
import OssDev from "./pages/ossDev";
import ToolsDev from "./pages/toolsDev";
import ContactDev from "./pages/ContactDev";
import BlogDev from "./pages/BlogDev";

import Researcher from "./pages/Researcher";
import InterestsResearcher from "./pages/InterestRes";
import LiteratureResearcher from "./pages/LiteratureRes";
import ToolsResearcher from "./pages/ToolsRes";
import ContactRes from "./pages/ContactRes";

function App() {
  return (
      <Routes>
        {/* Home / Landing */}
        <Route path="/" element={<Landing />} />

        {/* Recruiter profile main page */}
        <Route path="/recruiter" element={<Recruiter />} />

        {/* Sub-pages for Top Picks of Recruiter*/}
        <Route path="/skills" element={<Skills />} />
        <Route path="/work-permit" element={<WorkPermit />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/recommendations" element={<Recommendations />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />

        {/* Developer profile main page */}
        <Route path="/developer" element={<Developer />} />

        {/* Sub-pages for Top Picks of Developer*/}
        <Route path="/dev/projects" element={<ProjDev />} />
        <Route path="/dev/oss" element={<OssDev/>} />
        <Route path="/dev/blog" element={<BlogDev/>} />
        <Route path="/dev/tools" element={<ToolsDev />} />
        <Route path="/dev/contact" element={<ContactDev />} />

        {/* Researcher profile main page */}
        <Route path="/researcher" element={<Researcher />} />

        {/* Sub-pages for Top Picks of Researcher*/}
        <Route path="/res/interests" element={<InterestsResearcher />} />
        <Route path="/res/literature" element={<LiteratureResearcher />} />
        <Route path="/res/tools" element={<ToolsResearcher />} />
        <Route path="/res/contact" element={<ContactRes />} />

        {/* Profiles still under construction */}
        <Route path="/stalker" element={<InProgress />} />
        {/* Catch-all for anything not matched */}
        <Route path="*" element={<InProgress />} />
      </Routes>
  );
}

export default App;





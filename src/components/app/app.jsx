import React from "react";
import { useLocation } from "react-router-dom";
import {Routes, Route} from "react-router-dom";

import { Scrollbars } from 'rc-scrollbars';
import HomePage from "../../pages/HomePage/HomePage";
import ContactPage from "../../pages/ContactPage/ContactPage";
import Layout from "../layout/layout";
import AboutPage from "../../pages/AboutPage/AboutPage";
import CostPage from "../../pages/CostPage/CostPage";
import ProjectsPage from "../../pages/ProjectsPage/ProjectsPage";

function App() {

  const { pathname } = useLocation();

  React.useEffect(() => {
    const scrollbarsElement = document.querySelector(".rc-scrollbars-view");
    if (scrollbarsElement) {
      scrollbarsElement.scrollTop = 0;
    }
  }, [pathname]);
  return (
    <>
    <Scrollbars style={{ height: "100vh" }}>
      <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="cost" element={<CostPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          </Route>
        </Routes>
    </Scrollbars>
    </>
  );
}

export default App;

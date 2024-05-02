import React from "react";
import {Routes, Route} from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import Layout from "../layout/layout";

function App() {

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
     <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        </Route>
      </Routes>
      </>
  );
}

export default App;

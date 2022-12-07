import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home/Payges";
import Service from "../pages/Service/Service";
import About from "../pages/About/About";
import Cantact from "../pages/Cantact/Cantact";
import Project from "../pages/Project/Project";
import Team from "../pages/Team/Team";
import Singlepages2 from "../pages/Singlepages2/Singlepages2";
import SinglePages from "../pages/Home/singlepage";
import ScrollToTop from "../components/Scroll/Scroll";
import { Box } from "@mui/system";
const Router = () => {
  return (
    <Box>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/project" element={<Project />} />
        <Route path="/team" element={<Team />} />
        <Route path="/singlepages2" element={<Singlepages2 />} />
        <Route path="/singlepages" element={<SinglePages />} />
        <Route path="/cantact" element={<Cantact />} />
      </Routes>
    </Box>
  );
};

export default Router;

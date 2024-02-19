import * as React from "react";
import { Box, Container } from "@mui/material";
import Section1 from "../components/landingPageSections.jsx/Section1";
import Section2 from "../components/landingPageSections.jsx/Section2";
import Section3 from "../components/landingPageSections.jsx/Section3";
import Section4 from "../components/landingPageSections.jsx/Section4";

const LandingPage = () => {
  return (
    <Container maxWidth="xl">
      <Box component="section" sx={{ height: "auto", marginTop: "80px" }}>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </Box>
    </Container>
  );
};

export default LandingPage;

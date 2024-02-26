import * as React from "react";
import { Box, Container } from "@mui/material";
import ResponsiveNavBar from "../components/common/navbar";
import Section1 from "../components/landingPageSections/Section1";
import Section2 from "../components/landingPageSections/Section2";
import Section3 from "../components/landingPageSections/Section3";
import Section4 from "../components/landingPageSections/Section4";
import Section5 from "../components/landingPageSections/Section5";
import Section6 from "../components/landingPageSections/Section6";
import Section7 from "../components/landingPageSections/Section7";
import Footer from "../components/common/footer";

const LandingPage = () => {
  return (
    <Container maxWidth="xl">
      <ResponsiveNavBar />
      <Box component="section" sx={{ height: "auto", marginTop: "80px" }}>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
      </Box>
      <Footer />
    </Container>
  );
};

export default LandingPage;

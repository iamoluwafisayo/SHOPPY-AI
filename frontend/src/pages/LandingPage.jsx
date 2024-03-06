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
            <style>
                @import
                url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap')
            </style>
            <ResponsiveNavBar />
            <Box component="section" sx={{ height: "auto", marginTop: "80px" }}>
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                {/* <Section5 /> */}
                <Section6 />
                <Section7 />
            </Box>
            <Footer />
        </Container>
    );
};

export default LandingPage;

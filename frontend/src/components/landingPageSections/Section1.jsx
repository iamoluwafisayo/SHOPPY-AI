import React from "react";
import { Button, Grid, Typography, CardMedia } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Section1 = () => {
  const theme = useTheme();

  return (
    <Grid container spacing={2} alignItems="center" id="home">
      {/* First Column: Text */}
      <Grid item xs={12} md={6} sx={{ marginTop: { xs: 1, md: 10 } }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontFamily: "Noto Sans",
            fontSize: { xs: "36px", md: "46px" },
            fontWeight: 700,
            letterSpacing: "0px",
            textAlign: "left",
            color: "#2B2B2B",
            marginLeft: { md: "80px" },
          }}
        >
          Enhance your customer support using our impactful solution
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Noto Sans",
            fontSize: "20px",
            fontWeight: 500,
            lineHeight: "32px",
            letterSpacing: "0.15000000596046448px",
            textAlign: "left",
            marginLeft: { md: "80px" },
          }}
        >
          Transform customer support through our AI-driven solution, providing
          unmatched efficiency and seamless assistance.
        </Typography>
        <Button
          color="inherit"
          variant="contained"
          sx={{
            marginTop: "20px",
            borderRadius: "20px",
            background: theme.palette.blue.normal,
            color: theme.palette.text.white,
            marginLeft: { md: "80px" },
            "&:hover": {
              background: theme.palette.blue.hover,
              color: theme.palette.text.secondary,
            },
          }}
        >
          Get Started
        </Button>
      </Grid>

      {/* Second Column: Image */}
      <Grid item xs={12} md={6}>
        <CardMedia component="img" image="/images/img1.png" alt="Image" />
      </Grid>
    </Grid>
  );
};

export default Section1;

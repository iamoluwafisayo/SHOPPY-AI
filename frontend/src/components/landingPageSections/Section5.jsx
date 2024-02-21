import React from "react";
import { Box, Button, CardMedia, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Section5 = () => {
  const theme = useTheme();
  return (
    <Grid
      container
      spacing={2}
      marginTop={{ xs: "10px", md: "80px" }}
      justifyContent="center"
      alignItems="center"
    >
      {/* First Row: One Column */}
      <Grid item xs={12}>
        <Typography
          gutterBottom
          sx={{
            fontFamily: "Noto Sans",
            fontSize: { xs: "24px", md: "32px" },
            fontWeight: 700,
            lineHeight: "36px",
            letterSpacing: "0.25px",
            textAlign: "center",
            color: "#4A4A4A",
          }}
        >
          Automate frequently asked questions.
        </Typography>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontFamily: "Noto Sans",
            fontSize: { xs: "14px", md: "20px" },
            fontWeight: 400,
            lineHeight: "32px",
            letterSpacing: "0.15px",
            textAlign: "center",
          }}
        >
          Our chatbot can reduce the workload on your team by addressing
          frequently asked questions.
        </Typography>
      </Grid>

      {/* Second Row: Two Columns */}
      <Grid container item xs={12} md={6} justifyContent="center">
        <CardMedia
          component="img"
          image="/images/img4.png"
          alt="Image"
          style={{ width: "100%", maxWidth: "430px", height: "auto" }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            padding: { xs: "0 16px", md: "0 80px" },
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontFamily: "Noto Sans",
              fontSize: "18px",
              fontWeight: 600,
              lineHeight: "25px",
              letterSpacing: "0.25px",
              color: "#2B2B2B",
            }}
          >
            Complete self-service
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              fontFamily: "Noto Sans",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "25px",
              letterSpacing: "0.15px",
            }}
          >
            Most frequently asked questions by visitors are well attended to by
            our chatbots, so you can focus on more productive tasks.
          </Typography>
          <Button
            color="inherit"
            variant="outlined"
            sx={{
              marginTop: "20px",
              borderRadius: "20px",
              "&:hover": {
                borderColor: theme.palette.blue.main,
              },
            }}
          >
            Get Started
          </Button>
        </Box>
      </Grid>

      {/* Third Row: Two Columns */}
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            padding: { xs: "0 16px", md: "0 80px" },
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontFamily: "Noto Sans",
              fontSize: "18px",
              fontWeight: 600,
              lineHeight: "25px",
              letterSpacing: "0.25px",
              color: "#2B2B2B",
            }}
          >
            Swift resolution for customers
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              fontFamily: "Noto Sans",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "25px",
              letterSpacing: "0.15px",
            }}
          >
            Unlock premium functionalities. Streamline your customer service
            with Kluster AI. Collaborate with our effective AI to automate your
            business.
          </Typography>
          <Button
            color="inherit"
            variant="outlined"
            sx={{
              marginTop: "20px",
              borderRadius: "20px",
              "&:hover": {
                borderColor: theme.palette.blue.main,
              },
            }}
          >
            Get Started
          </Button>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardMedia
          component="img"
          image="/images/img5.png"
          alt="Image"
          style={{ width: "100%", maxWidth: "430px", height: "auto" }}
        />
      </Grid>
    </Grid>
  );
};

export default Section5;

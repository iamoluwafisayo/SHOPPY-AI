import React from "react";
import { Grid, Typography, CardMedia } from "@mui/material";

const Section4 = () => {
  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      justifyContent="center"
      sx={{ marginTop: "80px" }}
    >
      {/* First Column: Text */}
      <Grid item xs={12} md={6} container justifyContent="center">
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontFamily: "Noto Sans",
            fontSize: { xs:"28px", md: "32px" },
            fontWeight: 700,
            lineHeight: "48px",
            letterSpacing: "0.25px",
            textAlign: "left",
            color: "#2B2B2B",
            marginBottom: "40px",
            width: "388px",
          }}
        >
          Interact with visitors on your website through live chat
        </Typography>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontFamily: "Noto Sans",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "25px",
            letterSpacing: "0.15px",
            textAlign: "left",
            width: "388px",
          }}
        >
          Utilize the live chat to actively engage with your visitors, providing
          personalized information tailored to their activities to cultivate
          loyalty and convert them into long-term customers.
        </Typography>
      </Grid>

      {/* Second Column: Image */}
      <Grid
        item
        container
        xs={12}
        md={6}
        justifyContent="center"
        alignItems="center"
      >
        <CardMedia
          component="img"
          image="/images/img6.png"
          alt="Image"
          style={{ width: "330px", height: "360px" }}
        />
      </Grid>
    </Grid>
  );
};

export default Section4;

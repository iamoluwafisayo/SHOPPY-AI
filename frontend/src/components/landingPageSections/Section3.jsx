import { Grid, Typography } from "@mui/material";

const Section3 = () => {
  return (
    <Grid
      container
      alignItems="center"
      sx={{
        marginTop: "80px",
        background: "#C4E0FD",
        minHeight: "280px",
      }}
    >
      <Typography
        gutterBottom
        sx={{
          fontFamily: "Noto Sans",
          fontSize: { xs: "24px", md: "30px" },
          fontWeight: 700,
          lineHeight: "36px",
          letterSpacing: "0.25px",
          textAlign: "center",
          color: "#4A4A4A",
          padding: { md: "16px 230px" },
        }}
      >
        We collaborate with all enterprises (SMEs, MNEs) to facilitate growth in
        Kluster
      </Typography>
    </Grid>
  );
};

export default Section3;

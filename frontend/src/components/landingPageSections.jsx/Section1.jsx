import { Grid, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Section1 = () => {
  const theme = useTheme();

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12} md={6} sx={{paddingLeft:"70px"}}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontFamily: "Noto Sans",
            fontSize: "46px",
            fontWeight: 700,
            letterSpacing: "0px",
            textAlign: "left",
            color: "#2B2B2B",
            marginLeft: "80px"
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
            marginLeft: "80px"
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
            marginLeft: "80px",
            "&:hover": {
              background: theme.palette.blue.hover,
              color: theme.palette.text.secondary,
            },
          }}
        >
          Get Started
        </Button>
      </Grid>
      <Grid item xs={12} md={6}>
        <img
          src="/images/img1.png"
          alt="Illustration of our product"
          style={{ width: "fixed", height: "552.68px" }}
        />
      </Grid>
    </Grid>
  );
};

export default Section1;

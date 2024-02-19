import { Box, Grid, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Section2 = () => {
  const theme = useTheme();

  return (
    <Grid container spacing={2} alignItems="center" sx={{ marginTop: "80px" }}>
      <Grid item xs={12} md={6}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontFamily: "Noto Sans",
            fontSize: "32px",
            fontWeight: 700,
            lineHeight: "48px",
            letterSpacing: "0.25px",
            textAlign: "left",
            color: "#2B2B2B",
            marginLeft: "80px"
          }}
        >
          Solve customer problems instantly using AI
        </Typography>
        <Grid container spacing={2} sx={{marginLeft:"65px"}}>
          <Grid item xs={12} md={6}>
            <Box sx={{ flexGrow: 1 }}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  fontFamily: "Noto Sans",
                  fontSize: "18px",
                  fontWeight: 600,
                  lineHeight: "25px",
                  letterSpacing: "0.25px",
                  textAlign: "left",
                  color: "#2B2B2B",
                }}
              >
                Reduce your response time
              </Typography>
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  fontFamily: "Noto Sans",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "25px",
                  letterSpacing: "0.15000000596046448px",
                  textAlign: "left",
                }}
              >
                Respond to customer messages using conversational AI that
                emulates human language. Kluster can address customer’s
                inquiries through AI-powered conversations.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ flexGrow: 1 }}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  fontFamily: "Noto Sans",
                  fontSize: "18px",
                  fontWeight: 600,
                  lineHeight: "25px",
                  letterSpacing: "0.25px",
                  textAlign: "left",
                  color: "#2B2B2B",
                }}
              >
                24/7 Support
              </Typography>
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  fontFamily: "Noto Sans",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "25px",
                  letterSpacing: "0.15000000596046448px",
                  textAlign: "left",
                }}
              >
                Put personalized support within reach so customers can get fast
                answers on their queries and problems
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Button
          color="inherit"
          variant="outlined"
          sx={{
            marginTop: "20px",
            borderRadius: "20px",
            marginLeft:"80px",
            "&:hover": {
              border: `1.5px solid ${theme.palette.blue.normal}`,
            },
          }}
        >
          Get Started
        </Button>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{ textAlign: "right", paddingRight: "90px" }}
      >
        <img
          src="/images/img2.png"
          alt="Illustration of our product"
          style={{ width: "330px", height: "360px" }}
        />
      </Grid>
    </Grid>
  );
};

export default Section2;

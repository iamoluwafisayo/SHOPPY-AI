import { Box, Grid, Typography } from "@mui/material";

const Section4 = () => {
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
            marginBottom: "40px",
            marginLeft: "80px",
            width: "388px",
          }}
        >
          Interact with visitors on your website through live chat
        </Typography>
        <Grid container spacing={2} sx={{ marginLeft: "80px" }}>
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
                width: "388px",
              }}
            >
              Monitor as they navigate your website
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
                width: "388px",
              }}
            >
              Utilize the live chat to actively engage with your visitors,
              providing personalized information tailored to their activities to
              cultivate loyalty and convert them into long-term customers.
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{ textAlign: "right", paddingRight: "90px" }}
      >
        <img
          src="/images/img6.png"
          alt="Illustration of our product"
          style={{ width: "330px", height: "360px" }}
        />
      </Grid>
    </Grid>
  );
};

export default Section4;

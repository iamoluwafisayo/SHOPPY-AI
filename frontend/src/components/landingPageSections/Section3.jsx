import { Grid, Typography, CardMedia, Box } from "@mui/material";

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
                    paddingBottom: "0",
                }}
            >
                We collaborate with diffrent brands to provide you with the best
                products at the best prices
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",

                    width: "100%",
                    margin: "auto",
                }}
            >
                <CardMedia
                    component="img"
                    image="/images/amazon.png"
                    backgroundColor="white"
                    alt="Amazon Logo"
                    sx={{ height: "70px", width: "auto" }}
                />
                <CardMedia
                    component="img"
                    image="/images/carvana.png"
                    alt="Carvana Logo"
                    backgroundColor="white"
                    sx={{ height: "100px", width: "auto", pb: "10px" }}
                />
            </Box>
        </Grid>
    );
};

export default Section3;

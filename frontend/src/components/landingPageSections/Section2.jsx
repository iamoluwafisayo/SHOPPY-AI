import { Grid, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { CardMedia } from "@mui/material";

const Section2 = () => {
    const theme = useTheme();
    return (
        <Grid
            container
            spacing={2}
            sx={{ marginTop: "80px" }}
            justifyContent="center"
            alignItems="center"
            id="services"
        >
            {/* Left Column */}
            <Grid item xs={12} md={6}>
                {/* First Row in Left Column */}
                <Grid container spacing={2}>
                    <Typography
                        variant="h4"
                        gutterBottom
                        sx={{
                            fontFamily: "Noto Sans",
                            fontSize: { xs: "30px", md: "35px" },
                            fontWeight: 700,
                            letterSpacing: "0px",
                            textAlign: "left",
                            color: "#2B2B2B",
                            marginLeft: { xs: "12px", md: "65px" },
                        }}
                    >
                        Find the best products for you instantly using AI
                    </Typography>
                </Grid>

                {/* Second Row in Left Column */}
                <Grid container spacing={2} marginLeft={{ md: "40px" }}>
                    {/* First Column in Second Row */}
                    <Grid item xs={12} md={6}>
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
                            Reduce your search time
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
                                // marginLeft: { md: "65px" },
                            }}
                        >
                            Cut away the hassle of visiting multiple websites to
                            find one product and instantly get what you're
                            looking for with one simple sentence describing
                            exactly what you need.
                        </Typography>
                    </Grid>
                    {/* Second Column in Second Row */}
                    <Grid item xs={12} md={6}>
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
                            Search multiple stores at the same time.
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
                            }}
                        >
                            Remove the hassle of going from one store to another
                            searching for the best products or the best deals
                            get everything in one place.
                        </Typography>
                    </Grid>
                </Grid>
                <Button
                    color="inherit"
                    variant="outlined"
                    sx={{
                        marginTop: "20px",
                        borderRadius: "20px",
                        marginLeft: { md: "60px" },
                        "&:hover": {
                            border: `1.5px solid ${theme.palette.blue.normal}`,
                        },
                    }}
                >
                    Get Started
                </Button>
            </Grid>

            {/* Right Column */}
            <Grid
                container
                item
                xs={12}
                md={6}
                justifyContent="center"
                alignItems="center"
            >
                <CardMedia
                    component="img"
                    image="/images/img2.png"
                    alt="Image"
                    style={{ width: "330px", height: "360px" }}
                />
            </Grid>
        </Grid>
    );
};

export default Section2;

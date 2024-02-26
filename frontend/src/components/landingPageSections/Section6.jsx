import { Box, Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CustomerReviewCard from "./ReviewCard";
import { reviews } from "../../data/reviews";
import { responsive } from "../../data/carouselResponsiveness";

const Section6 = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginTop: "80px",
        background: "#C4E0FD",
        minHeight: "573px",
      }}
      id="about-us"
    >
      <Box gridColumn="span 12" sx={{ padding: "16px 0" }}>
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
          Why choose us ?
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
          Here are some of our customer’s review
        </Typography>
      </Box>
      <Box sx={{ padding: { md: "0 100px" } }}>
        <Carousel
          responsive={responsive}
          infinite={true}
          showDots={true}
          autoPlay={true}
        >
          {console.log("from section component", reviews)}
          {reviews.map((review) => (
            <div key={review.id}>
              <CustomerReviewCard data={review} />
            </div>
          ))}
        </Carousel>
      </Box>
    </Box>
  );
};

export default Section6;

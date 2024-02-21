import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Divider,
  Rating,
} from "@mui/material";

const CustomerReviewCard = ({ data }) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        marginBottom: "20px",
        height: { xs: "auto", md: "330px" },
      }}
    >
      <CardMedia
        component="img"
        sx={{
          width: 160,
          minWidth: 400,
          objectFit: "cover",
          padding: "20px",
          borderRadius: "30px",
        }}
        image={data.imageUrl}
        alt="Customer Image"
      />
      <CardContent>
        <CardMedia
          component="img"
          sx={{
            width: 25,
            minWidth: 25,
            objectFit: "cover",
            borderRadius: "30px",
          }}
          image="https://s3-alpha-sig.figma.com/img/eeb1/2695/8a2b212118273799bb4fb2c6b7afef27?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fEinJg~P2x2FftuckqPRTayZF4Aa2wJLgdEUtFJHi6wlcsQWw-oVPQsmYTGZ6Lgjn8YRlDqxqYSmZR-NALNgLHRTeH8cLhCIAbslESu7Su-oy9N2Faz5ZL8g7HtJl1b1hwl58kVQrsc6bUlyDwEdkadd10R6jD6ZgA0Z06YAo0OiU~xl0kBsiMKm27hG9KN1xILQ8mwjM9jdMyCrsFzVVK4R-A8R5fapuI00R8xir4Yz5f~Klie85arq3wSpEh~tn~dPuXbN~qWlmI5x16~saoGPNwkr4QNCzZevZtzWGB56-cmLrVv2gPcObtF0TN~dwrRh97mXSa3gf-Xaia6-nQ__"
          alt="Customer Image"
        />
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ textAlign: "justify" }}
          gutterBottom
        >
          {data.review}
        </Typography>
        <Divider sx={{ borderTopWidth: 1 }} />
        <Typography
          variant="subtitle1"
          color="text.black"
          gutterBottom
          sx={{
            fontSize: "20.05px",
            fontWeight: 400,
            fontFamily: "Noto Sans",
            lineHeight: "33.42px",
            padding: "8px 0",
          }}
        >
          {`${data.first_name} ${data.last_name}`} {" | "} {data.role}
        </Typography>
        <Typography
          variant="body1"
          color="text.black"
          gutterBottom
          sx={{
            fontSize: "14px",
            fontWeight: 400,
            fontFamily: "Noto Sans",
          }}
        >
          {data.created_at}
        </Typography>
        <Rating name="read-only" value={data.rating} precision={0.5} readOnly />
      </CardContent>
    </Card>
  );
};

export default CustomerReviewCard;

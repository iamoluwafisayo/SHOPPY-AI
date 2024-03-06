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
                <Rating
                    name="read-only"
                    value={data.rating}
                    precision={0.5}
                    readOnly
                />
            </CardContent>
        </Card>
    );
};

export default CustomerReviewCard;

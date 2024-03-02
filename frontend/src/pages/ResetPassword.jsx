import React from "react";
import { useForm } from "react-hook-form";
import { emailValidator } from "../components/utils/validators";
import { useNavigate } from "react-router-dom";
import LoadingButton from "@mui/lab/LoadingButton";
import {
  Box,
  TextField,
  Typography,
  Container,
  CardMedia,
} from "@mui/material";

const ResetPassword = () => {
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    const encodedEmail = btoa(data.email); // Base64 encode the email
    navigate(`/auth/otp?email=${encodedEmail}`);
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      {/* Image */}
      <Box
        sx={{
          position: "absolute",
          left: 0,
          bottom: 0,
          maxWidth: 358,
          display: { xs: "none", md: "block" },
        }}
      >
        <CardMedia
          component="img"
          image="/images/img1.png"
          alt="Image"
          sx={{
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>

      {/* Form */}
      <Box
        sx={{
          zIndex: 2,
          width: "100%",
          maxWidth: "400px",
          padding: "6px",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontSize: "40px", fontWeight: "bold", color: "blue" }}
        >
          Reset Password
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            fullWidth
            {...register("email", emailValidator)}
            error={!!errors.email}
            helperText={!!errors.email ? errors.email.message : ""}
            label="Email Address"
            autoComplete="email"
            autoFocus
          />
          <LoadingButton
            variant="contained"
            type="submit"
            fullWidth
            loading={loading}
            loadingPosition="end"
            sx={{ mt: 2, mb: 3, borderRadius: "20px", padding: ".6rem 6rem" }}
          >
            {loading ? "Sending Link..." : "Send Link"}
          </LoadingButton>
        </Box>
      </Box>
    </Container>
  );
};

export default ResetPassword;

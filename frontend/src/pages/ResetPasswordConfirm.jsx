import React from "react";
import { useForm } from "react-hook-form";
import { passwordValidator } from "../components/utils/validators";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import LoadingButton from "@mui/lab/LoadingButton";
import {
  Box,
  TextField,
  Typography,
  Container,
  CardMedia,
  InputAdornment,
  IconButton,
} from "@mui/material";

const ResetPasswordConfirm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const password = watch("password");
  const onSubmit = async (data) => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
    navigate("/auth/success");
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
            type={showPassword ? "text" : "password"}
            label="New Password"
            {...register("password", passwordValidator)}
            error={!!errors.password}
            helperText={errors.password ? errors.password.message : ""}
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            margin="normal"
            type={"password"}
            label="Confirm Password"
            {...register("cpassword", {
              validate: (value) =>
                value === password || "The passwords do not match",
            })}
            error={!!errors.cpassword}
            helperText={errors.cpassword ? errors.cpassword.message : ""}
            fullWidth
          />
          <LoadingButton
            variant="contained"
            type="submit"
            fullWidth
            loading={loading}
            loadingPosition="end"
            sx={{ mt: 2, mb: 3, borderRadius: "20px"}}
          >
            {loading ? "Resetting Password..." : "Reset Password"}
          </LoadingButton>
        </Box>
      </Box>
    </Container>
  );
};

export default ResetPasswordConfirm;

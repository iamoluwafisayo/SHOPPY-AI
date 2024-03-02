import React from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import {
  emailValidator,
  passwordValidator,
} from "../components/utils/validators";
import Alert from "../components/utils/Alert";
import {
  Box,
  Button,
  TextField,
  Link,
  Typography,
  Container,
  CardMedia,
  Chip,
  Divider,
  IconButton,
  InputAdornment,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const onSubmit = async (data) => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    console.log({
      data,
    });
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
      <Box
        sx={{
          zIndex: 2,
          width: "100%",
          maxWidth: "400px",
          padding: "6px",
          textAlign: "center",
        }}
      >
        {/* Sign up heading */}
        <Typography
          variant="h5"
          sx={{ fontSize: "40px", fontWeight: "bold", color: "blue" }}
        >
          Sign In
        </Typography>
        <Typography component="h1">Welcome!👏 let's get started</Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{ mt: 1, padding: "6px", width: "400px" }}
        >
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
          {/* Render password input field */}
          <TextField
            margin="normal"
            type={showPassword ? "text" : "password"}
            label="Password"
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
          <Box textAlign="left">
            <Link href="/auth/reset-password/">Forgot Password?</Link>
          </Box>
          {/* Sign in button */}
          <LoadingButton
            variant="contained"
            type="submit"
            fullWidth
            loading={loading}
            loadingPosition="end"
            sx={{ mt: 2, mb: 3, borderRadius: "20px", padding: ".6rem 6rem" }}
          >
            {loading ? "Signing In..." : "Sign In"}
          </LoadingButton>
          <Typography component="h1">
            Don't have an account?
            <Link href="/auth/signup/" variant="body2">
              Sign Up
            </Link>
          </Typography>
          <Typography
            component="h6"
            sx={{ fontSize: ".8rem", marginBottom: "20px" }}
          >
            <Divider sx={{ marginY: 2 }}>
              <Chip label="OR" size="small" />
            </Divider>
            <Alert
              button={
                <Button
                  variant="outlined"
                  tabIndex={-1}
                  sx={{ borderRadius: "24px", marginY: 2 }}
                  startIcon={
                    <CardMedia
                      component="img"
                      image="/images/google.png"
                      alt="Image"
                      sx={{ width: 24, height: 24 }}
                    />
                  }
                >
                  Sign in with Google
                </Button>
              }
              message="Sign in with Google Coming Soon"
            />
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default SignIn;

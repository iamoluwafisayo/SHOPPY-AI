import React, { useRef, useEffect, useReducer } from "react";
import { Box, TextField, Container, Typography } from "@mui/material";
import { obfuscateEmail } from "../components/utils/obfuscateEmail";
import { useLocation, useNavigate } from "react-router-dom";
import { OTPAuthState } from "../components/reducers/states/initState";
import { OTPReducer } from "../components/reducers/OTPReducer";
import ACTIONS from "../components/reducers/actions";
import LoadingButton from "@mui/lab/LoadingButton";

const OTPAuth = () => {
  const [state, dispatch] = useReducer(OTPReducer, OTPAuthState);
  const serverOtp = "123456";
  const otpInputs = useRef([]);
  const location = useLocation();
  const navigate = useNavigate();

  const query = new URLSearchParams(location.search);
  const encodedEmail = query.get("email");
  const email = atob(encodedEmail);

  useEffect(() => {
    if (state.isResendButtonDisabled) {
      const interval = setInterval(() => {
        dispatch({ type: ACTIONS.SET_TIMER, payload: { interval } });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [state.isResendButtonDisabled]);

  const handleResendCode = async () => {
    dispatch({ type: ACTIONS.SET_LOADING, payload: true });
    await new Promise((resolve) => setTimeout(resolve, 1500));
    dispatch({
      type: ACTIONS.SET_TIMER_AND_BTN,
      payload: { button: true, timer: 60, loading: false },
    });
  };

  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const handleOTPChange = async (index, value) => {
    const newOTP = [...state.otp];
    newOTP[index] = value;

    // Focus on the next input field
    if (index < otpInputs.current.length - 1 && value !== "") {
      otpInputs.current[index + 1].focus();
    }

    // Update the OTP state
    dispatch({
      type: ACTIONS.SET_OTP,
      payload: { newOTP: newOTP },
    });

    // Validate OTP with server if all input fields are filled
    if (!newOTP.includes("") && newOTP.join("") === serverOtp) {
      // Correct OTP, navigate or perform other actions
      dispatch({
        type: ACTIONS.SET_OTP_ERROR,
        payload: { otpError: [false, " Redirecting..."] },
      });

      // Redirect after a timeout
      setTimeout(() => {
        navigate("/auth/reset-password-confirm");
      }, 2000);
    } else if (!newOTP.includes("") && newOTP.join("") !== serverOtp) {
      // Incorrect OTP, display error message
      dispatch({
        type: ACTIONS.SET_OTP_ERROR,
        payload: { otpError: [true, " Incorrect OTP"] },
      });
    }
  };

  const handleBackspace = (index, event) => {
    if (event.keyCode === 8 && index > 0 && !state.otp[index]) {
      const newOTP = [...state.otp];
      newOTP[index - 1] = "";
      dispatch({
        type: ACTIONS.SET_OTP,
        payload: { newOTP: newOTP },
      });
      otpInputs.current[index - 1].focus();
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h5"
        gutterBottom
        sx={{ fontSize: "40px", fontWeight: "bold", color: "blue" }}
      >
        OTP Verification
      </Typography>
      <Typography variant="body1" gutterBottom mb={4}>
        Enter OTP sent to {obfuscateEmail(email)}
      </Typography>
      <Box component="form" textAlign="center">
        {state.otp.map((value, index) => (
          <TextField
            key={index}
            inputRef={(el) => (otpInputs.current[index] = el)}
            error={state.otpError[0]}
            value={value}
            onChange={(e) => handleOTPChange(index, e.target.value)}
            onKeyDown={(e) => handleBackspace(index, e)}
            sx={{ margin: "5px", width: "40px" }}
            variant="outlined"
            size="small"
            inputProps={{
              maxLength: 1,
              sx: { textAlign: "center" },
            }}
          />
        ))}
        <Typography
          variant="body2"
          textAlign="center"
          color={state.otpError[0] ? "error" : "success"}
        >
          {state.otpError[1]}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="body1" my={2}>
            Didn't receive OTP code?
          </Typography>
          <Typography variant="body2">
            {state.isResendButtonDisabled
              ? `Resend available in ${formatTime(state.timer)}`
              : "You can resend the code now."}
          </Typography>

          <LoadingButton
            variant="contained"
            type="submit"
            size="small"
            onClick={handleResendCode}
            loading={state.loading}
            loadingPosition="end"
            disabled={state.isResendButtonDisabled}
            sx={{ mt: 2, mb: 3, borderRadius: "20px", padding: ".6rem 6rem" }}
          >
            {state.loading ? "Sending Code..." : "Resend Code"}
          </LoadingButton>
        </Box>
      </Box>
    </Container>
  );
};

export default OTPAuth;

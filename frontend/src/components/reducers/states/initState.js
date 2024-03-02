export const contextInitialState = {
  user: null,
  auth: false,
  role: null,
  notifications: [],
  isReady: false,
};

export const OTPAuthState = {
  otp: ["", "", "", "", "", ""],
  otpError: [],
  isResendButtonDisabled: true,
  timer: 120,
  serverOtp: "",
};

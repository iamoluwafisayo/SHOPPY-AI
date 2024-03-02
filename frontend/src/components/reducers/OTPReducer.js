import ACTIONS from "./actions";

export const OTPReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_OTP_RESEND_BUTTON:
      return {
        ...state,
        isResendButtonDisabled: action.payload,
      };
    case ACTIONS.SET_OTP_TIMER:
      return {
        ...state,
        timer: action.payload,
      };
    case ACTIONS.SET_OTP:
      return {
        ...state,
        otp: action.payload.newOTP,
      };
    case ACTIONS.SET_OTP_ERROR:
      return {
        ...state,
        otpError: action.payload.otpError,
      };
    case ACTIONS.SET_TIMER_AND_BTN:
      return {
        ...state,
        isResendButtonDisabled: action.payload.button,
        timer: action.payload.timer,
        loading: action.payload.loading
      };
    case ACTIONS.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case ACTIONS.SET_TIMER:
      if (state.timer <= 1) {
        clearInterval(action.payload.interval);
        return { ...state, timer: 0, isResendButtonDisabled: false };
      }
      return { ...state, timer: state.timer - 1 };
    default:
      return state;
  }
};

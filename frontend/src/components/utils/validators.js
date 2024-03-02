export const emailValidator = {
  required: "Please enter your email",
  pattern: {
    value:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Please enter a valid email address",
  },
};

export const passwordValidator = {
  required: "Please enter your password",
  pattern: {
    value:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    //Example Password:StrongPassword123!
    message:
      "Password must include lowercase, uppercase, digit, special character, and be at least 8 characters.",
  },
};

export const nameValidator = {
  required: "Please enter your name",
  pattern: {
    value: /^[a-zA-Z]+$/,
    message: "Please enter a valid name",
  },
  minLength: {
    value: 4,
    message: "Name must be greater than 3 characters",
  },
};

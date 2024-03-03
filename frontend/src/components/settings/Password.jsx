import { Divider, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
// import { successToast, errorToast } from "../utils/toastUtils";

const Password = () => {
  const [loading, setLoading] = useState(false);

  const handlePasswordChange = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 3000));

    // function to change user password
    const passwordChange = true;
    if (passwordChange) {
    //   successToast("Password updated succesfully");
      setLoading(false);
    } else {
    //   errorToast("Failed to update profile");
      setLoading(false);
    }
  };
  return (
    <Box>
      <Typography variant="subtitle1">Password Reset</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.8, pb: 2 }}>
        Update your password here
      </Typography>
      <Divider />
      <Box sx={{ mt: 3 }}>
        <Box sx={{ my: 2 }}>
          <TextField
            label="Enter your old password"
            variant="outlined"
            size="small"
            type="password"
            fullWidth
            defaultValue={"124bkf#4Ef"}
          />
        </Box>
        <Box sx={{ my: 2 }}>
          <TextField
            label="New Password"
            variant="outlined"
            size="small"
            type="password"
            fullWidth
            defaultValue={"124bkf#4Ef"}
          />
        </Box>
        <Box sx={{ my: 2 }}>
          <TextField
            label="Confirm password"
            variant="outlined"
            size="small"
            type="password"
            fullWidth
            defaultValue={"124bkf#4Ef"}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            mt: 3,
          }}
        >
          <LoadingButton
            type="submit"
            loading={loading}
            loadingPosition="start"
            variant="contained"
            onClick={handlePasswordChange}
            sx={{ width: "200px" }}
          >
            {loading ? "Please Wait..." : "Change Password"}
          </LoadingButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Password;
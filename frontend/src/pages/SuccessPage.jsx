import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { CheckCircleOutline } from "@mui/icons-material";

const SuccessPage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      textAlign="center"
    >
      <CheckCircleOutline sx={{ fontSize: 100, color: "green" }} />
      <Typography variant="h4" gutterBottom>
        Congratulations!
      </Typography>
      <Typography variant="body1" gutterBottom>
        Your action was successful.
      </Typography>
      <Button variant="contained" color="primary" href="/">
        Go to Home
      </Button>
    </Box>
  );
};

export default SuccessPage;

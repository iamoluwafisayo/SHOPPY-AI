import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import Stats from "../components/home/Stats";

const DashboardHome = () => {
  return (
    <Box sx={{ pt: "80px", pb: "20px" }}>
      <Paper
        sx={{
          boxShadow: "none !important",
          borderRadius: "12px",
          borderStyle: "solid",
          borderWidth: "1px",
          borderColor: "divider",
          p: "10px",
        }}
      >
        <Typography variant="h4">Dashboard</Typography>
      </Paper>
      <Box marginY={2}>
        <Stats />
      </Box>
    </Box>
  );
};

export default DashboardHome;

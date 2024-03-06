import * as React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

const sideBarWidth = 300;
const Dashboard = () => {
  return (
    <React.Fragment>
      <Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            position: "relative",
            left: {md:"300px"},
            width: { xs: "100%", md: `calc(100% - ${sideBarWidth}px)` },
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Dashboard;

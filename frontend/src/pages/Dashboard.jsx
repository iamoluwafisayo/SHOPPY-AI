import * as React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Sidebar from "../components/common/dashboard/Sidebar";
import Navbar from "../components/common/dashboard/Navbar";

const sideBarWidth = 250;

function Dashboard() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: "flex" }}>
        <Navbar
          sideBarWidth={sideBarWidth}
          handleDrawerToggle={handleDrawerToggle}
        />
        <Sidebar
          sideBarWidth={sideBarWidth}
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
        />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            px: { xs: 1, md: 2 },
            width: { xs: "100%", md: `calc(100% - ${sideBarWidth}px)` },
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default Dashboard;

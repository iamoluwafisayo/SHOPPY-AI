import React from "react";
import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";
import ResponsiveAppBar from "./components/common/navbar";

const App = () => {
  const theme = useTheme();
  return (
    <React.Fragment>
      <ResponsiveAppBar />
      <Typography
        variant="h1"
        component="h2"
        sx={{ color: theme.palette.red.normal }}
      >
        Hello World!
      </Typography>
    </React.Fragment>
  );
};

export default App;

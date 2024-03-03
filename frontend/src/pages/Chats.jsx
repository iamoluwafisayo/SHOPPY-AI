import { Box, Grid, Paper, Typography } from "@mui/material";
import Chat from "../components/chats/Chat";
import Users from "../components/chats/Users";

const Chats = () => {
  return (
    <Box sx={{ pt: "80px" }}>
      <Paper
        sx={{
          borderRadius: "12px",
          borderStyle: "solid",
          borderWidth: "1px",
          borderColor: "divider",
          p: "20px",
          display: "flex",
          overflow: "hidden"
        }}
      >
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            sm={6}
            lg={4}
            sx={{ borderRight: "2px solid #d6d6d6" }}
          >
            <Users />
          </Grid>

          <Grid item xs={12} sm={6} lg={8}>
            <Chat />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Chats;

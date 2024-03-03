import React, { useState } from "react";
import { Box, Switch, Divider, TextField, Typography } from "@mui/material";
import { company } from "../../data/company";
import LoadingButton from "@mui/lab/LoadingButton";

const Company = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(company);

  const handleUpdateCompany = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setLoading(false);
  };

  return (
    <Box>
      <Typography variant="subtitle1">{data.company_name}</Typography>
      <Divider />
      <Box sx={{ mt: 3 }}>
        <Box sx={{ mt: 4, display: "flex", alignItems: "center", gap: 4 }}>
          <TextField
            label="Enter Company Name"
            variant="outlined"
            rows={4}
            fullWidth
            size="small"
            defaultValue={data.company_name}
          />
          <TextField
            label="Enter Company Website"
            variant="outlined"
            rows={4}
            fullWidth
            size="small"
            defaultValue={data.company_website}
          />
        </Box>
        <Box sx={{ mt: 4, display: "flex", alignItems: "center", gap: 4 }}>
          <TextField
            label="Bot Token"
            variant="outlined"
            rows={4}
            size="small"
            fullWidth
            defaultValue={data.bot_token}
          />
          <TextField
            label="Role"
            variant="outlined"
            rows={4}
            size="small"
            fullWidth
            InputProps={{
              readOnly: true,
            }}
          />
        </Box>
        <Box sx={{ my: 2 }}>
          <TextField
            label="About Company"
            variant="outlined"
            size="small"
            fullWidth
            multiline
            rows={8}
t            defaultValue={data.company_description}
          />
        </Box>
        <Box
          sx={{
            my: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography>Enable support Agent</Typography>
          <Switch />
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
            onClick={handleUpdateCompany}
            sx={{ width: "180px" }}
          >
            {loading ? "Please Wait..." : "Save Changes"}
          </LoadingButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Company;

import { Avatar, Divider, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { user } from "../../data/user";
import LoadingButton from "@mui/lab/LoadingButton";

const Profile = () => {
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState(user.first_name);
  const [lastName, setLastName] = useState(user.last_name);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [address, setAddress] = useState(user.address);
  
  //   const handleImageUpload = (image) => {
  //     setProfileImage(image);
  //   };
  const handleUpdateProfile = async () => {
    setLoading(true);
    const updatedFields = Object.entries({
      first_name: firstName,
      last_name: lastName,
      username,
      email,
      address,
    }).reduce((acc, [key, value]) => {
      if (value !== user[key] && typeof value !== "undefined") {
        acc[key] = value;
      }
      return acc;
    }, {});

    // function to update the user profile
    if (Object.keys(updatedFields).length !== 0) {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      Object.keys(updatedFields).forEach((key) => {
        switch (key) {
          case "first_name":
            setFirstName(updatedFields.first_name);
            break;
          case "last_name":
            setLastName(updatedFields.last_name);
            break;
          case "username":
            setUsername(updatedFields.username);
            break;
          case "email":
            setEmail(updatedFields.email);
            break;
          case "address":
            setAddress(updatedFields.address);
            break;
          default:
            break;
        }
      });
    }
  };

  return (
    <Box>
      <Typography variant="subtitle1">Profile</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.8, pb: 2 }}>
        Update your photo and profile here
      </Typography>
      <Divider />
      <Box sx={{ mt: 3 }}>
        <Box sx={{ mt: 1, mb: 3 }}>
          <Avatar  sx={{ width: 200, height: 200 }} />
        </Box>
        {/* <ImageUpload onImageUpload={handleImageUpload} /> */}
        <Box sx={{ mt: 4, display: "flex", alignItems: "center", gap: 4 }}>
          <TextField
            label="First Name"
            variant="outlined"
            rows={4}
            fullWidth
            size="small"
            onChange={(e) => setFirstName(e.target.value)}
            defaultValue={user.first_name}
          />
          <TextField
            label="Last Name"
            variant="outlined"
            rows={4}
            fullWidth
            size="small"
            onChange={(e) => setLastName(e.target.value)}
            defaultValue={user.last_name}
          />
        </Box>
        <Box sx={{ mt: 4, display: "flex", alignItems: "center", gap: 4 }}>
          <TextField
            label="Username"
            variant="outlined"
            rows={4}
            size="small"
            fullWidth
            onChange={(e) => setUsername(e.target.value)}
            defaultValue={user.username}
          />
          <TextField
            label="Role"
            variant="outlined"
            rows={4}
            size="small"
            fullWidth
            defaultValue={user.role}
            InputProps={{
              readOnly: true,
            }}
          />
        </Box>
        <Box sx={{ my: 2 }}>
          <TextField
            label="Email"
            variant="outlined"
            size="small"
            fullWidth
            onChange={(e) => setEmail(e.target.value)}
            defaultValue={user.email}
          />
        </Box>
        <Box sx={{ my: 2 }}>
          <TextField
            label="Address"
            variant="outlined"
            size="small"
            fullWidth
            onChange={(e) => setAddress(e.target.value)}
            defaultValue={user.address}
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
            onClick={handleUpdateProfile}
            sx={{ width: "180px" }}
          >
            {loading ? "Please Wait..." : "Save Changes"}
          </LoadingButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;

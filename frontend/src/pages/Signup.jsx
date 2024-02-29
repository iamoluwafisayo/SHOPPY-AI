import * as React from 'react';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import cover from '../images/img1.png';
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment } from "@mui/material";
import { useState } from "react";
import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';



// Password component
const PasswordInput = ({ password, handlePassword }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <TextField
      
      margin="normal"
      type={showPassword ? "text" : "password"}
      
      value={password}
      onChange={handlePassword}
      required={true}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      fullWidth
    />
  );
};

// Render password 
const DisplayPasswordInput = () => {
  const [password, setPassword] = useState("");

  return (
    <div
      style={{ display: "flex", justifyContent: "center", padding: ".5rem 0" }}
    >
      <PasswordInput
        password={password}
        handlePassword={(e) => setPassword(e.target.value)}
      />
    </div>
  );
};



export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  

  
  return (
    
    <Container component="main" maxWidth="false" sx={{ right: '0px', textAlign: 'center'}}>
  
      <Box 
        sx={{  
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          placeItems: "center",
          textAlign: 'center'
           
        }}
      >

        {/* Sign up heading */}
        <Typography component="h1" variant="h5" sx={{ fontSize: "40px", fontWeight: 'bold', color: 'blue'}}>
          Sign up
        </Typography>
        <Typography component="h1">
        Welcome!👏 let's get started
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, padding: '6px', width: '400px'}}>
         
         <Typography component="h1">

            {/* Email input field */}
          Enter E-mail address
        </Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <Typography component="h1">
          Enter password
        </Typography>
         
         {/* Render password input field */}
         <DisplayPasswordInput />

         {/* Sign in button */}
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 2, mb: 3, borderRadius: '20px', padding: '.6rem 6rem'}}
          >
            Log in
          </Button>
     
                   
            <Typography component="h1" v>
               Already have an account?
               <Link href="#" variant="body2" sx={{ }}>
                  signin
                </Link>
            </Typography>
            <Typography component="h6" sx={{ fontSize: '.8rem', marginBottom: '20px'}}>
            ______________________or__________________
            </Typography>

            {/* Google signin button */}
            <GoogleOAuthProvider>
               <GoogleLogin />  
            </GoogleOAuthProvider>
            
       </Box>
          
      </Box>
      <Box component="img" src={cover} 
    sx={{ width: '30rem', position: 'absolute', bottom: '-16px', left: '0px'}}></Box>
    </Container>
   
  );
}
import { TextField, Button, Typography, Box } from "@mui/material";
import { useForm } from "react-hook-form";

const Section7 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        maxHeight: "100%",
        mt: "80px",
      }}
      id="contact-us"
    >
      <Box sx={{ maxWidth: 600, mx: "auto", p: 2 }}>
        <Typography variant="h4" align="center" mb={2}>
          Contact Us
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <TextField
            fullWidth
            label="Name"
            {...register("name", { required: true })}
            error={!!errors.name}
            helperText={errors.name ? "Name is required" : ""}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Email"
            {...register("email", { required: true })}
            error={!!errors.email}
            helperText={errors.email ? "Email is required" : ""}
            type="email"
          />
          <TextField
            fullWidth
            label="Message"
            {...register("message", { required: true })}
            error={!!errors.message}
            helperText={errors.message ? "Message is required" : ""}
            margin="normal"
            multiline
            rows={4}
          />
          <Button variant="contained" type="submit" sx={{ mt: 2 }}>
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Section7;

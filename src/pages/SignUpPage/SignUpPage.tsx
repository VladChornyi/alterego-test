import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { signUpService } from "../../services/auth-services";
import { useAppDispatch } from "../../redux/store";
import { signInThunk } from "../../redux/auth/auth-thunk";
import React, { ChangeEvent, useState } from "react";

export const SignUpPage = () => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");

  const userMap = {
    email: setEmail,
    password: setPassword,
    first_name: setFirst_name,
    last_name: setLast_name,
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    userMap[name as keyof typeof userMap](value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast.error("Ім'я користувача або пароль введено неправильно.");
    signUpService({ email, password, first_name, last_name }).then(() => {
      dispatch(signInThunk({ email, password }));
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                // error
                autoComplete="given-name"
                name="first_name"
                required
                fullWidth
                onChange={handleChangeInput}
                value={first_name}
                inputProps={{ minLength: 3 }}
                id="first_name"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                // error
                required
                onChange={handleChangeInput}
                fullWidth
                id="last_name"
                label="Last Name"
                name="last_name"
                autoComplete="family-name"
                helperText="Incorrect entry."
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                // error={false}
                required
                fullWidth
                onChange={handleChangeInput}
                type="email"
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                // error
                required
                fullWidth
                onChange={handleChangeInput}
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link style={{ color: "#1976d2" }} to="/signin">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

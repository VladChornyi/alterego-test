import React, { ChangeEvent, useState } from "react";
import axios, { AxiosError } from "axios";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
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

export const SignUpPage = () => {
  const { t } = useTranslation();
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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await signUpService({ email, password, first_name, last_name });
      dispatch(signInThunk({ email, password }));
    } catch (e) {
      const error = e as Error | AxiosError;
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.detail);
      }
    }
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
          {t("SignUp")}
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="first_name"
                required
                fullWidth
                onChange={handleChangeInput}
                value={first_name}
                inputProps={{ minLength: 3 }}
                id="first_name"
                label={t("firstName")}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                onChange={handleChangeInput}
                fullWidth
                inputProps={{ minLength: 3 }}
                id="last_name"
                label={t("surname")}
                name="last_name"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                onChange={handleChangeInput}
                type="email"
                id="email"
                label={t("emailAddress")}
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                onChange={handleChangeInput}
                inputProps={{ minLength: 7 }}
                name="password"
                label={t("password")}
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
            {t("SignUp")}
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link style={{ color: "#1976d2" }} to="/signin">
                {t("existingAccount")}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

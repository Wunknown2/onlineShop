import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useAuth } from "../context/AuthContextProvider";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Copyright } from "@mui/icons-material";
const Auth = () => {
  const {
    user,
    email,
    hasAccount,
    password,
    emailError,
    passwordError,
    setHasAccount,
    setEmail,
    setPassword,
    setUser,
    setEmailError,
    setPasswordError,
    handleRegister,
    handleLogOut,
    handleLogin,
  } = useAuth();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data);
  };
  console.log(emailError, passwordError);
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {hasAccount ? "Login Form" : "Register Now"}
        </Typography>
        <Box onSubmit={handleSubmit} noValidate component="form" sx={{ mt: 1 }}>
          <TextField
            label="Email Address"
            name="email"
            autoFocus
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            helperText={emailError}
            fullWidth
            id="email"
            margin="normal"
          />
          <TextField
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            helperText={passwordError}
            fullWidth
            margin="normal"
            required
            name="password"
            id="password"
            type="password"
            autoComplete="current-password"
          />
          {hasAccount ? (
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={handleLogin}
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
          ) : (
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={handleRegister}
              sx={{ mt: 3, mb: 2 }}
            >
              Register Now
            </Button>
          )}
          <Grid container>
            <Grid item>
              <Typography
                variant="body2"
                onClick={() => setHasAccount(!hasAccount)}
                sx={{ cursor: "pointer", textDecoration: "underline" }}
              >
                {hasAccount
                  ? `Dont have an account? Register Now`
                  : "Already an account? Login "}
              </Typography>
            </Grid>
            <Copyright sx={{ mt: 0, mb: 4 }} />
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Auth;

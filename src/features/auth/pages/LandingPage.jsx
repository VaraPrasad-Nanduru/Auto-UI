import React from "react";
import { Box, Container, Typography, Button, Stack, Paper } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const MotionBox = motion(Box);

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <Container
      maxWidth="lg"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        py: 4,
      }}
    >
      {/* Hero Section */}
      <MotionBox
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Typography variant="h2" fontWeight="bold" gutterBottom>
          Welcome to <span style={{ color: "#1976d2" }}>LinkedAI</span>
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: "auto" }}>
          Automate your LinkedIn tasks effortlessly — sending messages, connecting with top profiles, and managing posts — all in one intelligent platform. 🚀
        </Typography>
      </MotionBox>

      {/* Action Buttons */}
      <MotionBox
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mt: 4 }}>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
          <Button
            variant="outlined"
            size="large"
            onClick={() => navigate("/register")}
          >
            Register
          </Button>
        </Stack>
      </MotionBox>

      {/* Features Section */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={4}
        sx={{ mt: 8, width: "100%" }}
        justifyContent="center"
      >
        <MotionBox
          component={Paper}
          elevation={3}
          p={4}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          sx={{ flex: 1 }}
        >
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Auto Connect
          </Typography>
          <Typography color="text.secondary">
            Send connection requests automatically to the top people in your community with smart filtering.
          </Typography>
        </MotionBox>

        <MotionBox
          component={Paper}
          elevation={3}
          p={4}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          sx={{ flex: 1 }}
        >
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Smart Messaging
          </Typography>
          <Typography color="text.secondary">
            Automatically send personalized messages by analyzing profiles and posts.
          </Typography>
        </MotionBox>

        <MotionBox
          component={Paper}
          elevation={3}
          p={4}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          sx={{ flex: 1 }}
        >
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Post Management
          </Typography>
          <Typography color="text.secondary">
            Schedule and automate your posts to engage your network consistently.
          </Typography>
        </MotionBox>
      </Stack>
    </Container>
  );
}

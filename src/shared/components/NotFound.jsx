import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Typography, Button, Container } from "@mui/material";
import { motion } from "framer-motion";
import ROUTES from "../../routes/RoutePaths";

const MotionTypography = motion(Typography);
const MotionButton = motion(Button);

const NotFound = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
        bgcolor: "#f9fafb",
        px: 2,
      }}
    >
      {/* Animated 404 */}
      <MotionTypography
        variant="h1"
        color="primary"
        sx={{ fontWeight: "bold", fontSize: { xs: 80, md: 120 } }}
        initial={{ scale: 0 }}
        animate={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 200, damping: 12 }}
      >
        404
      </MotionTypography>

      {/* Animated Text */}
      <MotionTypography
        variant="h6"
        color="textSecondary"
        sx={{ mt: 2 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Oops! The page you’re looking for doesn’t exist.
      </MotionTypography>

      {/* Animated Button */}
      <Box sx={{ mt: 4 }}>
        <MotionButton
          component={RouterLink}
          to={ROUTES.HOME}
          variant="contained"
          color="primary"
          size="large"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Go Back Home
        </MotionButton>
      </Box>
    </Container>
  );
};

export default NotFound;

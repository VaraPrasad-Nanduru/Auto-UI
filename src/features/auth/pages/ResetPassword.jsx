import React, { useState } from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  MenuItem,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";

import { requestPasswordResetOtp, resetPassword } from "../services/authApi";

const steps = ["Request OTP", "Reset Password"];

const ResetPassword = () => {
  const [activeStep, setActiveStep] = useState(0);

  // Step 1: Request OTP
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [otpMethod, setOtpMethod] = useState("email");

  // Step 2: Reset Password
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [message, setMessage] = useState("");

  // Request OTP Handler
  const handleRequestOtp = async () => {
    try {
      const data = await requestPasswordResetOtp({
        email,
        phone,
        otpMethod,
      });
      setMessage(data.message);
      setActiveStep(1);
    } catch (err) {
      setMessage(err.response?.data?.message || "Error requesting OTP");
    }
  };

  // Reset Password Handler
  const handleResetPassword = async () => {
    try {
      const data = await resetPassword({
        email,
        phone,
        otpMethod,
        otp,
        newPassword,
      });
      setMessage(data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || "Error resetting password");
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 6, p: 4, boxShadow: 3, borderRadius: 2, bgcolor: "white" }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Reset Password
        </Typography>

        {/* Stepper */}
        <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 3 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {/* Step 1: Request OTP */}
        {activeStep === 0 && (
          <Box>
            <TextField
              fullWidth
              margin="normal"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <TextField
              select
              fullWidth
              margin="normal"
              label="OTP Method"
              value={otpMethod}
              onChange={(e) => setOtpMethod(e.target.value)}
            >
              <MenuItem value="email">Email</MenuItem>
              <MenuItem value="phone">Phone</MenuItem>
              <MenuItem value="whatsapp">WhatsApp</MenuItem>
            </TextField>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
              onClick={handleRequestOtp}
            >
              Request OTP
            </Button>
          </Box>
        )}

        {/* Step 2: Reset Password */}
        {activeStep === 1 && (
          <Box>
            <TextField
              fullWidth
              margin="normal"
              label="OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <TextField
              fullWidth
              type="password"
              margin="normal"
              label="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              sx={{ mt: 2 }}
              onClick={handleResetPassword}
            >
              Reset Password
            </Button>
          </Box>
        )}

        {message && (
          <Typography color="success.main" sx={{ mt: 2 }}>
            {message}
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default ResetPassword;

import { post } from '../../../services/api/restApiService';

export const loginUser = async ({ email, password }) => {
  return post('/api/auth/login', { email, password });
};

export const requestOtp = (payload) =>
  post('/api/auth/request-otp', payload);

export const verifyOtpSignup = (payload) =>
  post('/api/auth/verify-otp-signup', payload);

export const requestPasswordResetOtp = (payload) =>
  post('/api/auth/request-password-reset', payload);

export const resetPassword = (payload) =>
  post('/api/auth/reset-password', payload);
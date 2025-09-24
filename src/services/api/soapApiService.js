// api/soapApiService.js
import axios from 'axios';

export const soapRequest = async ({ url, xmlBody, headers = {} }) => {
  try {
    const response = await axios.post(url, xmlBody, {
      headers: { ...headers, 'Content-Type': 'text/xml' },
    });
    return response.data;
  } catch (error) {
    console.error('SOAP API Error:', error);
    throw error;
  }
};

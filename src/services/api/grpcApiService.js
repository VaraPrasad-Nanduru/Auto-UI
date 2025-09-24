// api/grpcApiService.js
import { grpcClient } from './grpcClient'; // assume grpcClient is configured

export const grpcRequest = async (methodName, requestData) => {
  try {
    return await new Promise((resolve, reject) => {
      grpcClient[methodName](requestData, (err, response) => {
        if (err) return reject(err);
        resolve(response);
      });
    });
  } catch (error) {
    console.error('gRPC API Error:', error);
    throw error;
  }
};

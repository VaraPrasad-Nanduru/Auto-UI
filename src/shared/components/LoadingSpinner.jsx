import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-600 border-solid"></div>
      <span className="ml-3 text-gray-700 text-lg font-medium">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;

import React from 'react';
import { Button } from '@mui/material';
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PaymentSuccess = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8">
      <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 md:p-10 text-center max-w-md w-full transform hover:scale-105 transition-transform duration-300">
        <div className="flex justify-center items-center">
          <FaCheckCircle className="text-green-500 text-5xl sm:text-6xl md:text-7xl mb-4 animate-bounce" />
        </div>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-gray-800">Payment Successful!</h1>
        <p className="text-gray-600 text-sm sm:text-base mb-6 px-2 sm:px-4">
          Thank you for your purchase. Your payment has been successfully processed.
        </p>
        <Link to={'/'}>
          <Button 
            variant="contained" 
            color="primary" 
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm sm:text-base font-medium transition-colors duration-300 w-full sm:w-auto"
            onClick={() => console.log('Back to Home')}>
            Back to Home
          </Button>
        </Link>
      </div>    </div>
  );
};

export default PaymentSuccess;
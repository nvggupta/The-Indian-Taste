import React from 'react';
import { Button } from '@mui/material';
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PaymentSuccess = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 text-center max-w-md w-full">
        <FaCheckCircle className="text-green-500 text-6xl mb-4" />
        <h1 className="text-2xl font-semibold mb-2">Payment Successful!</h1>
        <p className="text-gray-600 mb-6">
          Thank you for your purchase. Your payment has been successfully processed.
        </p>
        <Link to={'/'}><Button 
          variant="contained" 
          color="primary" 
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={() => console.log('Back to Home')}>
          Back to Home
        </Button></Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;

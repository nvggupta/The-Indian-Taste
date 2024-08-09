import React from 'react';
import { TextField, Button, MenuItem } from '@mui/material';
import { FaCalendarAlt, FaClock, FaUsers } from 'react-icons/fa';

const Reservation = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Reserve Your Table</h1>
      <form className="w-full max-w-sm bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <TextField
            fullWidth
            label="Date"
            type="date"
            InputLabelProps={{ shrink: true }}
            InputProps={{
              startAdornment: <FaCalendarAlt className="mr-2" />,
            }}
          />
        </div>
        <div className="mb-4">
          <TextField
            fullWidth
            label="Time"
            type="time"
            InputLabelProps={{ shrink: true }}
            InputProps={{
              startAdornment: <FaClock className="mr-2" />,
            }}
          />
        </div>
        <div className="mb-4">
          <TextField
            fullWidth
            select
            label="Number of People"
            InputProps={{
              startAdornment: <FaUsers className="mr-2" />,
            }}
          >
            {[...Array(10).keys()].map((n) => (
              <MenuItem key={n + 1} value={n + 1}>
                {n + 1}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <Button variant="contained" color="primary" fullWidth>
          Reserve Now
        </Button>
      </form>
    </div>
  );
};

export default Reservation;

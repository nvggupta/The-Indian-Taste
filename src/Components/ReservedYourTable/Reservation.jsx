import React, { useState, useEffect } from 'react';
import { TextField, Button, MenuItem } from '@mui/material';
import { FaCalendarAlt, FaClock, FaUsers } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Reservation = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    people: '',
  });
  const [errors, setErrors] = useState({});

  // Get today in YYYY-MM-DD format
  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const getCurrentTime = () => {
    const now = new Date();
    now.setMinutes(now.getMinutes() + 5); // Next 5 mins
    return now.toTimeString().slice(0, 5); // HH:MM
  };

  const [minDate, setMinDate] = useState(getTodayDate());
  const [minTime, setMinTime] = useState(getCurrentTime());

  useEffect(() => {
    if (formData.date === getTodayDate()) {
      setMinTime(getCurrentTime());
    } else {
      setMinTime('00:00'); // If not today, allow any time
    }
  }, [formData.date]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    let tempErrors = {};
    const now = new Date();

    if (!formData.date) tempErrors.date = 'Date is required';
    else {
      const selectedDate = new Date(formData.date);
      if (selectedDate < new Date(getTodayDate())) {
        tempErrors.date = 'Cannot select a past date';
      }
    }

    if (!formData.time) tempErrors.time = 'Time is required';
    else {
      const selectedDateTime = new Date(`${formData.date}T${formData.time}`);
      if (formData.date === getTodayDate() && selectedDateTime < now) {
        tempErrors.time = 'Cannot select a past time';
      }
    }

    if (!formData.people) tempErrors.people = 'Please select number of people';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate('/menu');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Reserve Your Table</h1>
      <form className="w-full max-w-sm bg-white p-6 rounded-lg shadow-lg" onSubmit={handleSubmit}>
        <div className="mb-4">
          <TextField
            name="date"
            fullWidth
            label="Date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            error={!!errors.date}
            helperText={errors.date}
            inputProps={{ min: minDate }}
            InputLabelProps={{ shrink: true }}
            InputProps={{
              startAdornment: <FaCalendarAlt className="mr-2" />,
            }}
          />
        </div>
        <div className="mb-4">
          <TextField
            name="time"
            fullWidth
            label="Time"
            type="time"
            value={formData.time}
            onChange={handleChange}
            error={!!errors.time}
            helperText={errors.time}
            inputProps={{ min: minTime }}
            InputLabelProps={{ shrink: true }}
            InputProps={{
              startAdornment: <FaClock className="mr-2" />,
            }}
          />
        </div>
        <div className="mb-4">
          <TextField
            name="people"
            fullWidth
            select
            label="Number of People"
            value={formData.people}
            onChange={handleChange}
            error={!!errors.people}
            helperText={errors.people}
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
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Reserve Now
        </Button>
      </form>
    </div>
  );
};

export default Reservation;

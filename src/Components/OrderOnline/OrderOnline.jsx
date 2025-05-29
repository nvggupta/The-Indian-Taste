import React, { useState } from 'react';
import { MdRestaurantMenu, MdShoppingCart } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const OrderOnline = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    items: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
    setErrors({
      ...errors,
      [e.target.id]: ''
    });
  };

  const validate = () => {
    let tempErrors = {};

    // Name: must only contain letters and spaces
    if (!formData.name.trim()) {
      tempErrors.name = 'Name is required';
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      tempErrors.name = 'Name must contain only letters and spaces';
    }

    // Address: must be at least 10 characters and contain both letters and numbers
    if (!formData.address.trim()) {
      tempErrors.address = 'Address is required';
    } else if (formData.address.length < 10) {
      tempErrors.address = 'Address must be at least 10 characters long';
    } else if (!/[a-zA-Z]/.test(formData.address) || !/\d/.test(formData.address)) {
      tempErrors.address = 'Address must contain both letters and numbers';
    }

    // Items: at least 5 characters
    if (!formData.items.trim()) {
      tempErrors.items = 'Please list your order items';
    } else if (formData.items.length < 5) {
      tempErrors.items = 'Items must be more descriptive (at least 5 characters)';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleOnlineOrder = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate('/menu');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <div className="flex items-center justify-center mb-6">
          <MdRestaurantMenu className="text-4xl text-red-500" />
          <h2 className="ml-2 text-2xl font-bold text-gray-800">Order Online</h2>
        </div>
        <form className="space-y-4" onSubmit={handleOnlineOrder}>
          <div>
            <label htmlFor="name" className="block text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className={`mt-1 w-full p-2 border rounded focus:outline-none focus:ring-2 ${
                errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-red-500'
              }`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="address" className="block text-gray-700">Address</label>
            <input
              type="text"
              id="address"
              value={formData.address}
              onChange={handleChange}
              className={`mt-1 w-full p-2 border rounded focus:outline-none focus:ring-2 ${
                errors.address ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-red-500'
              }`}
            />
            {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
          </div>

          <div>
            <label htmlFor="items" className="block text-gray-700">Order Items</label>
            <textarea
              id="items"
              value={formData.items}
              onChange={handleChange}
              className={`mt-1 w-full p-2 border rounded focus:outline-none focus:ring-2 ${
                errors.items ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-red-500'
              }`}
              rows="4"
            ></textarea>
            {errors.items && <p className="text-red-500 text-sm mt-1">{errors.items}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-red-500 text-white font-semibold rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Place Order
            <MdShoppingCart className="inline ml-2" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderOnline;

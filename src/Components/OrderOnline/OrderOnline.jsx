import React from 'react';
import { MdRestaurantMenu, MdShoppingCart } from 'react-icons/md';

const OrderOnline = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <div className="flex items-center justify-center mb-6">
          <MdRestaurantMenu className="text-4xl text-red-500" />
          <h2 className="ml-2 text-2xl font-bold text-gray-800">Order Online</h2>
        </div>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div>
            <label htmlFor="address" className="block text-gray-700">Address</label>
            <input
              type="text"
              id="address"
              className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div>
            <label htmlFor="items" className="block text-gray-700">Order Items</label>
            <textarea
              id="items"
              className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              rows="4"
            ></textarea>
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

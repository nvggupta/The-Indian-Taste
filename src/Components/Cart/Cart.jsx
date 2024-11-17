import React from 'react';
import { useSelector } from 'react-redux';
import CartList from './CartList';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
function Cart() {
  const cartItems = useSelector((state) => state.Menu[2]);
  const cart = useSelector((state) => state.Menu);

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 md:p-10">
      <h1 className="font-bold text-2xl sm:text-3xl text-purple-700 mb-4 sm:mb-6">Cart</h1>
      <div className="flex flex-col md:flex-row w-full max-w-7xl gap-4 sm:gap-6">
        {cartItems.length ? (
          <div className="w-full md:w-1/2 lg:w-3/5">
            <h2 className="font-bold text-xl sm:text-2xl text-purple-700 mb-3 sm:mb-4">Cart Summary</h2>
            <div className="max-h-[300px] sm:max-h-[400px] overflow-y-auto">
              {cartItems.map((elem) => (
                <CartList
                  key={elem._id}
                  name={elem.name}
                  id={elem._id}
                  pics={elem.image}
                  quantity={elem.quantity}
                  price={elem.price}
                  total={elem.totalPrice}
                />
              ))}
            </div>
            <div className="mt-4">
              <Link to="/menu">
                <Button className="w-full sm:w-auto">Back To Menu</Button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="w-full text-center">
            <Link to="/menu">
              <Button className="w-full sm:w-auto">Back To Menu</Button>
            </Link>
          </div>
        )}
        <div className="w-full md:w-1/2 lg:w-2/5 mt-6 md:mt-0 p-4 border border-gray-200 rounded-lg shadow-lg">
          <h2 className="font-bold text-xl sm:text-2xl text-purple-700 mb-4">Order Summary</h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <p className="font-semibold text-sm sm:text-base">Total Items:</p>
              <p className="text-sm sm:text-base">{totalItems}</p>
            </div>
            <div className="flex justify-between">
              <p className="font-semibold text-sm sm:text-base">Subtotal:</p>
              <p className="text-sm sm:text-base">₹{totalAmount.toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <p className="font-semibold text-sm sm:text-base">Tax (10%):</p>
              <p className="text-sm sm:text-base">₹{(totalAmount * 0.1).toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <p className="font-semibold text-sm sm:text-base">Delivery Charges:</p>
              {cartItems.length > 0 ? <p className="text-sm sm:text-base">₹50.00</p> : <p className="text-sm sm:text-base">0</p>}
            </div>
            <div className="flex justify-between">
              <p className="font-bold text-base sm:text-lg">Total Amount:</p>
              {cartItems.length > 0 ? (
                <p className="font-bold text-base sm:text-lg">₹{(totalAmount + totalAmount * 0.1 + 50).toFixed(2)}</p>
              ) : (
                <p className="text-sm sm:text-base">0</p>
              )}
            </div>
          </div>
          <div className="mt-6">
            <h3 className="font-bold text-lg sm:text-xl text-purple-700 mb-3">Payment Method</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <input type="radio" name="payment" id="card" className="mr-2" />
                <label htmlFor="card" className="font-semibold text-sm sm:text-base">Credit/Debit Card</label>
              </div>
              <div className="flex items-center">
                <input type="radio" name="payment" id="upi" className="mr-2" />
                <label htmlFor="upi" className="font-semibold text-sm sm:text-base">UPI</label>
              </div>
              <div className="flex items-center">
                <input type="radio" name="payment" id="cod" className="mr-2" />
                <label htmlFor="cod" className="font-semibold text-sm sm:text-base">Cash on Delivery</label>
              </div>
            </div>
            <Link to="/paymentSuccess">
              <button className="w-full mt-6 py-2 sm:py-3 bg-purple-700 text-white font-bold text-sm sm:text-base rounded-lg hover:bg-purple-800 transition">
                Proceed to Payment
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
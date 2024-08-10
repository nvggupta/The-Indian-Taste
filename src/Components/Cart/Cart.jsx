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
    <div className="flex flex-col items-center justify-center p-4 md:p-10">
      <h1 className="font-bold text-3xl text-purple-700 mb-6">Cart</h1>
      <div className="flex flex-col md:flex-row w-full md:w-3/4 lg:w-1/2 gap-6">
        {(cartItems.length)  ? <div className="flex-1">
          <h2 className="font-bold text-2xl text-purple-700 mb-4">Cart Summary</h2>
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
          <div><Link to={'/menu'}><Button>Back To Menu</Button></Link></div>
        </div> : <div><Link to={'/menu'}><Button>Back To Menu</Button></Link></div>}
        <div className="flex-1 mt-6 md:mt-0 md:ml-6 p-4 border border-gray-200 rounded-lg shadow-lg">
          <h2 className="font-bold text-2xl text-purple-700 mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <p className="font-semibold">Total Items:</p>
            <p>{totalItems}</p>
          </div>
          <div className="flex justify-between mb-2">
            <p className="font-semibold">Subtotal:</p>
            <p>₹{totalAmount.toFixed(2)}</p>
          </div>
          <div className="flex justify-between mb-2">
            <p className="font-semibold">Tax (10%):</p>
            <p>₹{(totalAmount * 0.1).toFixed(2)}</p>
          </div>
          <div className="flex justify-between mb-2">
            <p className="font-semibold">Delivery Charges:</p>
            {(cartItems.length>0) ? <p>₹50.00</p> : <p>0</p>}
          </div>
          <div className="flex justify-between mb-2">
            <p className="font-bold text-lg">Total Amount:</p>
           {(cartItems.length>0) ? <p className="font-bold text-lg">₹{(totalAmount + totalAmount * 0.1 + 50).toFixed(2)}</p> : <p>0</p>} 
          </div>
          <div className="mt-4">
            <h3 className="font-bold text-xl text-purple-700 mb-2">Payment Method</h3>
            <div className="flex items-center mb-2">
              <input type="radio" name="payment" id="card" className="mr-2" />
              <label htmlFor="card" className="font-semibold">Credit/Debit Card</label>
            </div>
            <div className="flex items-center mb-2">
              <input type="radio" name="payment" id="upi" className="mr-2" />
              <label htmlFor="upi" className="font-semibold">UPI</label>
            </div>
            <div className="flex items-center mb-2">
              <input type="radio" name="payment" id="cod" className="mr-2" />
              <label htmlFor="cod" className="font-semibold">Cash on Delivery</label>
            </div>
            <Link to={"/paymentSuccess"}><button className="w-full mt-4 py-2 bg-purple-700 text-white font-bold rounded-lg hover:bg-purple-800 transition">
              Proceed to Payment
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;

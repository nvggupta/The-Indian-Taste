import React from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity } from '../MenuSlice/MenuSlice';

function CartList({ id, name, pics, price, quantity }) {
  const dispatch = useDispatch();
  const total = price * quantity;

  return (
    <div className="grid grid-cols-4 gap-4 items-center w-full p-4 border-b border-gray-200">
      <img className="rounded-2xl w-16 h-16 object-cover" src={pics} alt={name} />
      <div className="flex flex-col">
        <p className="font-semibold">{name}</p>
        <p className="text-gray-500">{quantity} x ₹{price}</p>
      </div>
      <div className="flex items-center">
        <button
          className="text-gray-600 hover:text-gray-800"
          onClick={() => dispatch(decreaseQuantity(id))}
        >
          <FaMinus />
        </button>
        <span className="mx-2">{quantity}</span>
        <button
          className="text-gray-600 hover:text-gray-800"
          onClick={() => dispatch(increaseQuantity(id))}
        >
          <FaPlus />
        </button>
      </div>
      <p className="font-semibold text-right">₹{total}</p>
    </div>
  );
}

export default CartList;

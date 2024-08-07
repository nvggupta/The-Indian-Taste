import React from 'react'
import { useSelector } from 'react-redux'
import CartList from './CartList';
function Cart() {
    const cartItem = useSelector(state=>state.Menu[2]);
    const cart = useSelector(state=>state.Menu);
    console.log(cart);
  return (
    <div className='flex flex-col items-center justify-center gap-10'>
        <h1 className='font-[700] text-3xl text-purple-700'>Cart Summery</h1>
      <div className='flex flex-col '>
        {cartItem.map((elem)=><CartList name={elem.name} id={elem._id} pics={elem.image} quantity={elem.quantity} price={elem.price} total={elem.totalPrice}/>)}
      </div>
      <p>Total Amount {cart[1].totalAmount}</p>
    </div>
  )
}

export default Cart

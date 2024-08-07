import React from 'react'

function CartList({id,name,totalPrice , pics , price , quantity}) {
    const total = price*quantity;
  return (
    <div className='grid grid-cols-2 w-1/2'>
    <img className='rounded-2xl w-[50px]' src={pics}></img>
    <div className='grid grid-cols-3 gap-5 w-full'>
      <p>{name}</p>
      <p>{quantity}*{price}</p>
      <p>{total}</p>
    </div>  
    </div>
  )
}

export default CartList

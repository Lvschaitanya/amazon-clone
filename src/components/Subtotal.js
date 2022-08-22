import React from 'react'
import { useStateValue } from './StateProvider'
import './Subtotal.css'

const Subtotal = () => {

    const [{basket}] = useStateValue()

    let total =0 
    basket.map(item=>total= total+item.price)

  return (
    <div className='subtotal'>
        <p>Subtotal ({basket.length} items)</p>
        <div className='amount'>
            <small>₹ </small>
            <strong>{total}</strong>
        </div>
        <small className='subtotal_gift'>
            <input type='checkbox' /> This is a gift
        </small>
        <button className='subtotal_button'>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
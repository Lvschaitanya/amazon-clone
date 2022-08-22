import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

const CheckoutProduct = ({id,title,price,rating,image}) => {

    const [{},dispatch] = useStateValue()

    // console.log(dispatch)
    // const [{basket}, dispatch] = useStateValue()
    console.log(dispatch)

    const removeItem = () => {
        console.log(1)
        dispatch({
            type: "DELETE_FROM_BASKET",
            payload: id
        })
    }

  return (
    <div key={id} className='checkoutProduct'>
        <img className='checkoutProduct_image' src={image} alt='' />

        <div className='checkoutProduct_info'>
            <p className='checkoutProduct_title'>{title}</p>
            <p className='checkoutProduct_price'>
                <small>₹</small>
                <strong>{price}</strong>
            </p>
            <div className='checkoutProduct_rating'>
                {Array(rating).fill().map((_,i)=>(<p>⭐</p>))}
            </div>
            <button onClick={removeItem}>Remove Item</button>
        </div>

    </div>
  )
}

export default CheckoutProduct
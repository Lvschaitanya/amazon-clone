import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'

const Product = ({id, title,img,price,rating}) => {

    const [{basket}, dispatch] = useStateValue()
    console.log(dispatch)

    const addToBasket = () =>{
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id:id,
                title:title,
                img:img,
                price:price,
                rating:rating
            }
        })
    }

  return (
    <div key={id} className='product'>
        <div className='product_info'>
            <p>{title}</p>
            <p className='product_price'>
                <small>₹</small>
                <strong>{price}</strong>
            </p>
            <div className='product_rating'>
                {Array(rating).fill().map((_,i)=>(<p>⭐</p>))}
            </div>
        </div>
        <img 
            src={img}
            alt=''
            className='product_image'
        />
        <button className='add_product' onClick={addToBasket}>Add to basket</button>
    </div>
  )
}

export default Product
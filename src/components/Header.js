import React from 'react'
import {Link} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { useStateValue } from './StateProvider'

import './Header.css'

const Header = () => {

  const [{basket}]= useStateValue()
  console.log(basket)

  return (
    <nav className='header'>
        <Link to='/'>
            <img className='header_img' src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='amazon' width='100px' />
            {/* <img className='header_img' src='https://images-eu.ssl-images-amazon.com/images/G/31/gno/sprites/nav-sprite-global-2x-hm-dsk-reorg._CB405936311_.png' alt='amazon' width='100px' /> */}
        </Link>
        <div className='header_search'>
          <input className='header_search_input' type='text' />
          <SearchIcon className='header_search_icon' />
        </div>

        <div className='header_nav'>

          <Link to='/login' className='header_link'>
            <div className='header_options'>
              <span className='header_options_line1'>Hello, User</span>
              <span className='header_options_line2'>Accounts</span>
            </div>
          </Link>

          <Link to='/login' className='header_link'>
            <div className='header_options'>
              <span className='header_options_line1'>Returns</span>
              <span className='header_options_line2'>& Orders</span>
            </div>
          </Link>

          <Link to='/login' className='header_link'>
            <div className='header_options'>
              <span className='header_options_line1'>Your</span>
              <span className='header_options_line2'>Prime</span>
            </div>
          </Link>

          <Link to='/checkout' className='header_cart header_link'>
            <ShoppingBasketIcon />
            <span>{basket.length}</span>
          </Link>
        </div>
        

    </nav>
  )
}

export default Header
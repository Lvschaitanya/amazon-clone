import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <div className='login'>
        <div className='amazon_image'>
            <Link to='/'>
                <img
                    className='image'
                    width='100px'
                    src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='' 
                />
            </Link>
        </div>
        <p>Email</p>
        <input type='text' />
        <p>Password</p>
        <input type='password' />
        <button >
            Login
        </button>
    </div>
  )
}

export default Login
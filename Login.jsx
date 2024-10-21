import React from 'react'
import './css/Login.css'
import { Link } from 'react-router-dom'


function login() {
  return (
    <div className='main'>
        <div className='body'>
           <form action="">

            <div>
                <input type="text" placeholder='User name' className='card1'/>
            </div>

            <div>
                <input type="password" placeholder='password' className='card2'/>
            </div>
            <button className='btn'>Login</button>
            <p></p>
            <Link to Register className='btn-default'>Register</Link>
           </form>
        </div>
    </div>
  )
}

export default login
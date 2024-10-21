import React from 'react'
import './css/Register.css'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className='main'>
        
        <div className='body'>

        <form action='' className='card1'>
        <div className='card2'>
        <h1><i>Register</i></h1>
        </div>
            <div>
                <input type="text" placeholder='Field name'/>
            </div>

            <div>
                <input type="text" placeholder='Name'/>
            </div>

            <div>
                <input type="email" placeholder='Email'/>
            </div>

            <div>
                <input type="tel" placeholder='Mobile no'/>
            </div>

            <div>
                <input type="text" placeholder='User name'/>
            </div>

            <div>
                <input type="text" placeholder='Role'/>
            </div>

            <button className='Reg'>Register</button>

            <button><Link to Login className='log'>Login</Link></button>
            </form>
        </div>
    </div>
  )
}

export default Register
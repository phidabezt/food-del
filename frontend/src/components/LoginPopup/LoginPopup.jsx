import { useState } from 'react'
import { assets } from '../../assets/assets'
import './LoginPopup.scss'

const LoginPopup = ({ closeLogin }) => {
  const [currentState, setCurrentState] = useState('Login')

  return (
    <div className='login-popup'>
      <form className='login-popup__form'>
        <div className='login-popup__title'>
          <h2>{currentState}</h2>
          <img onClick={closeLogin} src={assets.cross_icon} />
        </div>

        <div className='login-popup__inputs'>
          {currentState === 'Login' && (
            <input type='text' placeholder='Your name' required />
          )}
          <input type='email' placeholder='Your email' required />
          <input type='password' placeholder='Password' required />
        </div>
        <button>
          {currentState === 'Sign Up' ? 'Create account' : 'Login'}
        </button>

        <div className='login-popup__condition'>
          <input type='checkbox' required />
          <p>By continuing, I agree to the terms of use and privacy policy.</p>
        </div>
        {currentState === 'Login' && (
          <p>
            Create a new account?
            <span onClick={() => setCurrentState('Sign Up')}>Click here</span>
          </p>
        )}
        {currentState === 'Sign Up' && (
          <p>
            Already have an account?
            <span onClick={() => setCurrentState('Login')}>Login</span>
          </p>
        )}
      </form>
    </div>
  )
}

export default LoginPopup

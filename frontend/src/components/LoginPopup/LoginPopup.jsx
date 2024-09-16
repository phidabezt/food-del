import { useContext, useState } from 'react'
import axios from 'axios'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import './LoginPopup.scss'

const LoginPopup = ({ closeLogin }) => {
  const { url, setToken } = useContext(StoreContext)
  const [currentState, setCurrentState] = useState('Login')
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const onDataChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    setData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const onLogin = async (e) => {
    e.preventDefault()
    let newUrl = url
    if (currentState === 'Login') {
      newUrl += '/api/user/login'
    } else {
      newUrl += '/api/user/register'
    }
    console.log(newUrl)

    const response = await axios.post(newUrl, data)

    if (response.data.success) {
      setToken(response.data.token)
      localStorage.setItem('token', response.data.token)
      closeLogin()
    } else {
      alert(response.data.message)
    }
  }

  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className='login-popup__form'>
        <div className='login-popup__title'>
          <h2>{currentState}</h2>
          <img onClick={closeLogin} src={assets.cross_icon} />
        </div>

        <div className='login-popup__inputs'>
          {currentState === 'Sign Up' && (
            <input
              name='name'
              onChange={onDataChange}
              value={data.name}
              type='text'
              placeholder='Your name'
              required
            />
          )}
          <input
            name='email'
            onChange={onDataChange}
            value={data.email}
            type='email'
            placeholder='Your email'
            required
          />
          <input
            name='password'
            onChange={onDataChange}
            value={data.password}
            type='password'
            placeholder='Password'
            required
          />
        </div>
        <button type='submit'>
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

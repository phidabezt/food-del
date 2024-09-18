import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../context/StoreContext'
import './PlaceOrder.scss'

const PlaceOrder = () => {
  const navigate = useNavigate()
  const { getTotalCartAmount, token, foodList, cartItems, url } =
    useContext(StoreContext)
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    phone: '',
  })

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    setData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const placeOrder = async (e) => {
    e.preventDefault()
    let orderItems = []
    foodList.map((item) => {
      if (cartItems[item._id]) {
        let itemInfo = item
        itemInfo['quantity'] = cartItems[item._id]
        orderItems.push(itemInfo)
      }
    })

    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 2, // delivery charges here
    }

    let res = await axios.post(url + '/api/order/place', orderData, {
      headers: { token },
    })

    if (res.data.success) {
      const { session_url: sessionUrl } = res.data
      window.location.replace(sessionUrl)
    } else {
      alert('Error')
    }
  }

  useEffect(() => {
    if (!token) {
      navigate('/cart')
      alert('Login First')
    } else if (getTotalCartAmount() === 0) {
      navigate('/cart')
      alert('Add something to cart first')
    }
  }, [token])

  return (
    <form className='place-order' onSubmit={placeOrder}>
      <div className='place-order__left'>
        <p className='place-order__title'>Delivery Information</p>
        <div className='place-order__fields'>
          <input
            required
            name='firstName'
            onChange={handleChange}
            value={data.firstName}
            type='text'
            placeholder='First name'
          />
          <input
            required
            name='lastName'
            onChange={handleChange}
            value={data.lastName}
            type='text'
            placeholder='Last name'
          />
        </div>
        <input
          required
          name='email'
          onChange={handleChange}
          value={data.email}
          type='email'
          placeholder='Email address'
        />
        <input
          required
          name='street'
          onChange={handleChange}
          value={data.street}
          type='text'
          placeholder='Street'
        />
        <div className='place-order__fields'>
          <input
            required
            name='city'
            onChange={handleChange}
            value={data.city}
            type='text'
            placeholder='City'
          />
          <input
            required
            name='state'
            onChange={handleChange}
            value={data.state}
            type='text'
            placeholder='State'
          />
        </div>
        <div className='place-order__fields'>
          <input
            required
            name='zipCode'
            onChange={handleChange}
            value={data.zipCode}
            type='text'
            placeholder='Zip code'
          />
          <input
            required
            name='country'
            onChange={handleChange}
            value={data.country}
            type='text'
            placeholder='Country'
          />
        </div>
        <input
          required
          name='phone'
          onChange={handleChange}
          value={data.phone}
          type='text'
          placeholder='Phone'
        />
      </div>
      <div className='place-order__right'>
        <div className='cart__total'>
          <h2>Cart Totals</h2>
          <div className='cart__details'>
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className='cart__details'>
            <p>Delivery Fee</p>
            <p>${2}</p>
          </div>
          <hr />
          <div className='cart__details'>
            <b>Total</b>
            <b>${getTotalCartAmount() + 2}</b>
          </div>
          <button type='submit'>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder

import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import './PlaceOrder.scss'

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext)

  return (
    <form className='place-order'>
      <div className='place-order__left'>
        <p className='place-order__title'>Delivery Information</p>
        <div className='place-order__fields'>
          <input type='text' placeholder='First name' />
          <input type='text' placeholder='Last name' />
        </div>
        <input type='email' placeholder='Email address' />
        <input type='text' placeholder='Street' />
        <div className='place-order__fields'>
          <input type='text' placeholder='City' />
          <input type='text' placeholder='State' />
        </div>
        <div className='place-order__fields'>
          <input type='text' placeholder='Zip code' />
          <input type='text' placeholder='Country' />
        </div>
        <input type='text' placeholder='Phone' />
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
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder

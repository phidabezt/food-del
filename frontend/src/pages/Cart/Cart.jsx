import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import './Cart.scss'

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext)

  return (
    <div className='cart'>
      <div className='cart__items'>
        <div className='cart__title'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />

        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className='cart__title cart__item'>
                  <img src={item.image} alt='' />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p
                    onClick={() => removeFromCart(item._id)}
                    className='cart__cross'
                  >
                    x
                  </p>
                </div>
                <hr />
              </div>
            )
          }
        })}
      </div>
      <div className='cart__bottom'>
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
          <button>PROCEED TO CHECKOUT</button>
        </div>

        <div className='cart__promocode'>
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className='cart__promocode-input'>
              <input type='text' placeholder='Promo code' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart

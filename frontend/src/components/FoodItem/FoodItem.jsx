import { useContext } from 'react'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import './FoodItem.scss'

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext)

  return (
    <div className='food-item'>
      <div className='food-item__image-container'>
        <img className='food-item__image' src={image} alt={name} />
        {!cartItems[id] ? (
          <img
            className='food-item__add'
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
          />
        ) : (
          <div className='food-item__counter'>
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=''
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=''
            />
          </div>
        )}
      </div>
      <div className='food-item__info'>
        <div className='food-item__rating'>
          <p>{name}</p>
          <img src={assets.rating_starts} alt='rating stars' />
        </div>
        <p className='food-item__description'>{description}</p>
        <p className='food-item__price'>${price}</p>
      </div>
    </div>
  )
}

export default FoodItem

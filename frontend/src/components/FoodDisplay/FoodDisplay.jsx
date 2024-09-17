import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'
import './FoodDisplay.scss'

const FoodDisplay = ({ category }) => {
  const { foodList } = useContext(StoreContext)

  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>
      <div className='food-display__list'>
        {foodList.map((item) => {
          if (category === 'All' || category === item.category) {
            return (
              <FoodItem
                key={item.name}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            )
          }
        })}
      </div>
    </div>
  )
}

export default FoodDisplay

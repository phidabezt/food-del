import { menu_list } from '../../assets/assets'
import './ExploreMenu.scss'
import ExploreMenuItem from './ExploreMenuItem'

const ExploreMenu = ({ category, onCategoryChange }) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu__text'>
        Choose from a diverse menu featuring a delectable array of dishes
        crafted with the finest ingredients and culinary expertise. Our mission
        is to satisfy your cravings and elevate your dining experience, one
        delicious meal at a time.
      </p>
      <div className='explore-menu__list'>
        {menu_list.map((item) => {
          return (
            <ExploreMenuItem
              key={item.menu_name}
              category={category}
              name={item.menu_name}
              image={item.menu_image}
              onClick={() => onCategoryChange(item.menu_name)}
            />
          )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu

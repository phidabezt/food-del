import { NavLink } from 'react-router-dom'
import { assets } from '../../assets/assets'
import './Sidebar.scss'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar__options'>
        <NavLink to='/add' className='sidebar__option'>
          <img src={assets.add_icon} alt='' />
          <p>Add Items</p>
        </NavLink>
        <NavLink to='/list' className='sidebar__option'>
          <img src={assets.order_icon} alt='' />
          <p>List Items</p>
        </NavLink>
        <NavLink to='/orders' className='sidebar__option'>
          <img src={assets.order_icon} alt='' />
          <p>Orders</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar

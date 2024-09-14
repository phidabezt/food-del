import { assets } from '../../assets/assets'
import './Sidebar.scss'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar__options'>
        <div className='sidebar__option'>
          <img src={assets.add_icon} alt='' />
          <p>Add Items</p>
        </div>
        <div className='sidebar__option'>
          <img src={assets.order_icon} alt='' />
          <p>List Items</p>
        </div>
        <div className='sidebar__option'>
          <img src={assets.order_icon} alt='' />
          <p>Orders</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar

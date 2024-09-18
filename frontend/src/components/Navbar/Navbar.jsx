import { useContext, useState } from 'react'
import { StoreContext } from '../../context/StoreContext'
import { Link, useNavigate } from 'react-router-dom'
import NavbarItem from './NavbarItem'
import { assets } from '../../assets/assets'
import './Navbar.scss'

const Navbar = ({ openLogin }) => {
  const [activeMenuItem, setActiveMenuItem] = useState('home')
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext)
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('token')
    setToken('')
    navigate('/')
  }

  return (
    <div className='navbar'>
      <Link to='/'>
        <img src={assets.logo} alt='' className='navbar__logo' />
      </Link>
      <ul className='navbar__menu'>
        <NavbarItem
          linkTo='/'
          value='home'
          isActive={activeMenuItem === 'home'}
          onMenuChange={() => setActiveMenuItem('home')}
        />
        <NavbarItem
          linkTo='#explore-menu'
          value='menu'
          isActive={activeMenuItem === 'menu'}
          onMenuChange={() => setActiveMenuItem('menu')}
        />
        <NavbarItem
          linkTo='#app-download'
          value='mobile-app'
          isActive={activeMenuItem === 'mobile-app'}
          onMenuChange={() => setActiveMenuItem('mobile-app')}
        />
        <NavbarItem
          linkTo='#footer'
          value='contact us'
          isActive={activeMenuItem === 'contact-us'}
          onMenuChange={() => setActiveMenuItem('contact-us')}
        />
      </ul>
      <div className='navbar__right'>
        <img src={assets.search_icon} alt='' />
        <div className='navbar__search-icon'>
          <Link to='/cart'>
            <img src={assets.basket_icon} alt='' />
          </Link>
          <div
            className={getTotalCartAmount() === 0 ? '' : 'navbar__dot'}
          ></div>
        </div>
        {!token ? (
          <button className='navbar__button' onClick={openLogin}>
            sign in
          </button>
        ) : (
          <div className='navbar__profile'>
            <img src={assets.profile_icon} alt='' />
            <ul className='navbar__profile__dropdown'>
              <li onClick={() => navigate('/myorders')}>
                <img src={assets.bag_icon} alt="" />
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={logout}>
                <img src={assets.logout_icon} alt="" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar

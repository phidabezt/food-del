import './Navbar.scss'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='navbar__logo' src={assets.logo} alt='logo' />
      <img
        className='navbar__profile'
        src={assets.profile_image}
        alt='profile'
      />
    </div>
  )
}

export default Navbar

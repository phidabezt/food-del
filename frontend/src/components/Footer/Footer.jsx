import { assets } from '../../assets/assets'
import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer__content'>
        <div className='footer__left'>
          <img src={assets.logo} alt='' />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            delectus, nulla minus qui debitis velit ea mollitia nobis veniam
            fugiat dolore cum autem nostrum veritatis, magni et nisi commodi
            voluptatem?
          </p>
          <div className='footer__socials'>
            <img src={assets.facebook_icon} alt='' />
            <img src={assets.twitter_icon} alt='' />
            <img src={assets.linkedin_icon} alt='' />
          </div>
        </div>
        <div className='footer__center'>
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className='footer__right'>
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-212-456-7890</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className='footer__copyright'>Copyright 2024 © Tomato.com - All right Reserved.</p>
    </div>
  )
}

export default Footer

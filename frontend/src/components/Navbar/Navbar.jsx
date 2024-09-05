import { useState } from "react"
import { assets } from "../../assets/assets"
import NavbarItem from "./NavbarItem"
import "./Navbar.scss"

const Navbar = () => {
  const [activeMenuItem, setActiveMenuItem] = useState("home")

  return (
    <div className="navbar">
      <img src={assets.logo} alt="" className="navbar__logo" />
      <ul className="navbar__menu">
        <NavbarItem
          value="home"
          isActive={activeMenuItem === "home"}
          onMenuChange={() => setActiveMenuItem("home")}
        />
        <NavbarItem
          value="menu"
          isActive={activeMenuItem === "menu"}
          onMenuChange={() => setActiveMenuItem("menu")}
        />
        <NavbarItem
          value="mobile-app"
          isActive={activeMenuItem === "mobile-app"}
          onMenuChange={() => setActiveMenuItem("mobile-app")}
        />
        <NavbarItem
          value="contact us"
          isActive={activeMenuItem === "contact-us"}
          onMenuChange={() => setActiveMenuItem("contact-us")}
        />
      </ul>
      <div className="navbar__right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar__search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="navbar__dot"></div>
        </div>
        <button className="navbar__button">sign in</button>
      </div>
    </div>
  )
}

export default Navbar

import classNames from "classnames"

const NavbarItem = ({ isActive, onMenuChange, value }) => {
  if (!value || isActive === undefined || !onMenuChange) return



  return (
    <li
      onClick={() => onMenuChange(value)}
      className={classNames("navbar__item", {
        "navbar__item--active": isActive,
      })}
    >
      {value}
    </li>
  )
}

export default NavbarItem

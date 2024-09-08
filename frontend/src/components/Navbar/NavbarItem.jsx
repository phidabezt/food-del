import classNames from 'classnames'

const NavbarItem = ({ linkTo, isActive, onMenuChange, value }) => {
  if (!value || isActive === undefined || !onMenuChange) return

  return (
    <a
      href={linkTo}
      onClick={() => onMenuChange(value)}
      className={classNames('navbar__item', {
        'navbar__item--active': isActive,
      })}
    >
      {value}
    </a>
  )
}

export default NavbarItem

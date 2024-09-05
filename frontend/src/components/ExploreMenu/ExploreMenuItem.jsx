import classnames from 'classnames'

const ExploreMenuItem = ({ name, image, category, onClick }) => {
  if (!name || !image) return

  const classNames = classnames('explore-menu__item', {
    'explore-menu__item--active': category === name,
  })

  return (
    <div className={classNames} onClick={onClick}>
      <img src={image} alt={name} />
      <p>{name}</p>
    </div>
  )
}

export default ExploreMenuItem

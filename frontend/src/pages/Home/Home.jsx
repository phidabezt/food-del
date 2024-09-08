import { useState } from 'react'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
import './Home.scss'

const Home = () => {
  const [category, setCategory] = useState('All')

  const onCategoryChange = (value) => {
    setCategory(prev => prev === value ? 'All' : value)
  }

  return (
    <div>
      <Header />
      <ExploreMenu category={category} onCategoryChange={onCategoryChange} />
      <FoodDisplay category={category}/>
      <AppDownload />
    </div>
  )
}

export default Home

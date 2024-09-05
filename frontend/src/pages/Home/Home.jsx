import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
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
    </div>
  )
}

export default Home

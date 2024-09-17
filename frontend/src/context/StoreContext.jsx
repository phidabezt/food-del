import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {
  const url = 'http://localhost:4000'
  const [cartItems, setCartItems] = useState({})
  const [token, setToken] = useState('')
  const [foodList, setFoodList] = useState([])

  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({
        ...prev,
        [itemId]: 1,
      }))
    } else {
      setCartItems((prev) => ({
        ...prev,
        [itemId]: prev[itemId] + 1,
      }))
    }

    if (token) {
      await axios.post(
        url + '/api/cart/add',
        { itemId },
        { headers: { token } }
      )
    }
  }

  const removeFromCart = async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))

    if (token) {
      await axios.post(
        url + '/api/cart/remove',
        { itemId },
        { headers: { token } }
      )
    }
  }

  const getTotalCartAmount = () => {
    let totalAmount = 0
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = foodList.find((product) => product._id === item)
        totalAmount = itemInfo.price * cartItems[item]
      }
    }
    return totalAmount
  }

  const fetchFoodList = async () => {
    const response = await axios.get(url + '/api/food/list')
    setFoodList(response.data.data)
  }

  const loadCartData = async (token) => {
    const response = await axios.post(url + '/api/cart/get', {}, {headers: {token}})
    setCartItems(response.data.cartData)
  }

  const loadData = async () => {
    await fetchFoodList()

    if (localStorage.getItem('token')) {
      const localStorageToken = localStorage.getItem('token')
      setToken(localStorageToken)
      loadCartData(localStorageToken)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  const contextValue = {
    foodList,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken,
  }

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider

import axios from 'axios'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { assets } from '../../assets/assets'

import './Orders.scss'

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([])

  const fetchAllOrders = async () => {
    const response = await axios.get(url + '/api/order/list')
    if (response.data.success) {
      setOrders(response.data.data)
      console.log(response.data.data)
    } else {
      toast.error('Error')
    }
  }

  const handleStatusChange = async (e, orderId) => {
    const response = await axios.post(url + '/api/order/status', {
      orderId,
      status: e.target.value,
    })

    if (response.data.success) {
      await fetchAllOrders()
    }
  }

  useEffect(() => {
    fetchAllOrders()
  }, [])

  return (
    <div className='orders add'>
      <h3>Orders Page</h3>
      <div className='orders__list'>
        {orders.map((order) => (
          <div key={order._id} className='orders__item'>
            <img src={assets.parcel_icon} alt='' />
            <div>
              <p className='orders__item-food'>
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + ' x ' + item.quantity
                  } else {
                    return item.name + ' x ' + item.quantity + ','
                  }
                })}
              </p>
              <p className='orders__item-name'>
                {order.address.firstName + ' ' + order.address.lastName}
              </p>
              <div className='orders__item-address'>
                <p>{order.address.street + ','}</p>
                <p>
                  {order.address.city +
                    ', ' +
                    order.address.state +
                    ', ' +
                    order.address.country +
                    ', ' +
                    order.address.zipCode}
                </p>
              </div>
              <p className='orders__item-phone'>{order.address.phone}</p>
            </div>
            <p>Items : {order.items.length}</p>
            <p>${order.amount}</p>
            <select
              onChange={(e) => {
                handleStatusChange(e, order._id)
              }}
              value={order.status}
            >
              <option value='Food Processing'>Food Processing</option>
              <option value='Out for delivery'>Out for delivery</option>
              <option value='Delivered'>Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Orders

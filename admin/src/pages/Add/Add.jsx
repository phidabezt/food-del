import axios from 'axios'

import { useState } from 'react'
import { toast } from 'react-toastify'
import { assets } from '../../assets/assets'

import './Add.scss'

const Add = () => {
  const url = 'http://localhost:4000'

  const [image, setImage] = useState(null)
  const [data, setData] = useState({
    name: '',
    description: '',
    price: '',
    category: 'Salad',
  })

  const handleImageChange = (e) => {
    setImage(e.target.files[0])
  }

  const handleDataChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    setData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()

    formData.append('name', data.name)
    formData.append('description', data.description)
    formData.append('price', Number(data.price))
    formData.append('category', data.category)
    formData.append('image', image)

    const response = await axios.post(`${url}/api/food/add`, formData)

    if (response.data.success) {
      setData({
        name: '',
        description: '',
        price: '',
        category: 'Salad',
      })
      setImage(null)
      toast.success(response.data.message)
    } else {

    }
  }

  return (
    <div className='add'>
      <form className='add__form flex-col' onSubmit={handleSubmit}>
        <div className='add__image-upload flex-col'>
          <p>Upload Image</p>
          <label htmlFor='image'>
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=''
            />
          </label>
          <input
            type='file'
            id='image'
            onChange={handleImageChange}
            disabled={image}
            hidden
            required
          />
        </div>
        <div className='add__product-name flex-col'>
          <p>Product Name</p>
          <input
            onChange={handleDataChange}
            value={data.name}
            type='text'
            name='name'
            placeholder='Type here'
          />
        </div>
        <div className='add__product-description flex-col'>
          <p>Product Description</p>
          <textarea
            onChange={handleDataChange}
            value={data.description}
            name='description'
            rows={6}
            placeholder='Write content here'
          />
        </div>
        <div className='add__category-price'>
          <div className='add__category flex-col'>
            <p>Product Category</p>
            <select onChange={handleDataChange} name='category'>
              <option value='Salad'>Salad</option>
              <option value='Rolls'>Rolls</option>
              <option value='Deserts'>Deserts</option>
              <option value='Sandwich'>Sandwich</option>
              <option value='Cake'>Cake</option>
              <option value='Pure Veg'>Pure Veg</option>
              <option value='Pasta'>Pasta</option>
              <option value='Noodles'>Noodles</option>
            </select>
          </div>
          <div className='add__price flex-col'>
            <p>Product Price</p>
            <input
              onChange={handleDataChange}
              value={data.price}
              type='number'
              name='price'
              placeholder='$20'
              min='0'
            />
          </div>
        </div>
        <button type='submit' className='add__button'>
          ADD
        </button>
      </form>
    </div>
  )
}

export default Add

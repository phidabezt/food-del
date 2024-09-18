import orderModel from '../models/orderModel.js'
import userModel from '../models/userModel.js'
import Stripe from 'stripe'
import 'dotenv/config'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

// placing user order from frontend
const placeOrder = async (req, res) => {
  const frontEndUrl = 'http://localhost:5173'

  try {
    const newOrder = new orderModel({
      userId: req.body.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
    })

    await newOrder.save()
    await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} })

    const lineItems = req.body.items.map((item) => ({
      price_data: {
        currency: 'inr',
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100 * 80, // multiply by 80 to convert from inr to usd
      },
      quantity: item.quantity,
    }))

    lineItems.push({
      price_data: {
        currency: 'inr',
        product_data: {
          name: 'Delivery Charges',
        },
        unit_amount: 2 * 100 * 80,
      },
      quantity: 1,
    })

    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: 'payment',
      success_url: `${frontEndUrl}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${frontEndUrl}/verify?success=false&orderId=${newOrder._id}`,
    })

    res.json({
      success: true,
      session_url: session.url,
    })
  } catch (error) {
    console.log(error)
    res.json({
      success: false,
      message: 'Error',
    })
  }
}

// TODO: implement web hook here, below is temporary solution
const verifyOrder = async (req, res) => {
  const { orderId, success } = req.body
  try {
    if (success === 'true') {
      await orderModel.findByIdAndUpdate(orderId, { payment: true })
      res.json({
        success: true,
        message: 'Paid',
      })
    } else {
      await orderModel.findByIdAndDelete(orderId)
      res.json({
        success: false,
        message: 'Not Paid',
      })
    }
  } catch (error) {
    console.log(error)
    res.json({
      success: false,
      message: 'Error',
    })
  }
}

export { placeOrder, verifyOrder }

import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

  return (
    <div>
      Cart Total Component
    </div>
  )
}

export default CartTotal;
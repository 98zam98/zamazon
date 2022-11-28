import React, { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../state/hooks';

const Cart_num:FC = () => {
    // this  AppTheme will be used to change the theme of the app  
    // s here is short for state 
    const cart = useAppSelector(s => s.cart.cart_items);
    const dispatch = useAppDispatch()
    // end of state 

    // console.log(cart)

    return (
      <span className="cart_num">{cart.length}</span>
  )
}

export default Cart_num
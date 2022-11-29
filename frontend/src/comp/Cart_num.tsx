import { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../state/hooks';

const Cart_num: FC = () => {

  // s here is short for state 
  const cart = useAppSelector(s => s.cart.cart_items);
  const dispatch = useAppDispatch()
  // end of state 

  return (
    <span className="cart_num">{cart.length}</span>
  )
}

export default Cart_num
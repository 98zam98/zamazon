import React, { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../state/hooks';
import cartSlice from '../state/reducer/cartSlice';
import idprodSlice from '../state/reducer/idprodSlice';


interface Props {
  product: object
}

const Add_to_cart: FC<Props> = (x) => {
  const id = useAppSelector(s => s.idprod.id);
  const dispatch = useAppDispatch();


  return (
    <button className={(x.product as any).countInStock ? "Add_to_cart" : "empty"}

      onClick={
        () => {
          if ((x.product as any).countInStock) {
            dispatch(idprodSlice.actions.inc())
            dispatch(cartSlice.actions.add({ id: id, prod: x.product }))
          }
        }
      }
    >{(x.product as any).countInStock ? "add to cart" : "out of stock"}
    </button>
  )
}

export default Add_to_cart
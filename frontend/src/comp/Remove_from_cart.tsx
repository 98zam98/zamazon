
 import React, { FC } from 'react'
 import { useAppDispatch, useAppSelector } from '../state/hooks';
 import cartSlice from '../state/reducer/cartSlice';
 import idprodSlice from '../state/reducer/idprodSlice';
 
interface Props {
    product: object
  }

  
const Remove_from_cart: FC<Props> = (x) => {
    const id = useAppSelector(s => s.idprod.id);
    const dispatch = useAppDispatch();
  
    return (
        <button className="Remove_from_cart"

        onClick={
          () => {
              dispatch(idprodSlice.actions.dec())
              dispatch(cartSlice.actions.remove({ id: (x.product as any).id, prod: {}}))
            
          }
        }
      >X
      </button>
    )
}

export default Remove_from_cart


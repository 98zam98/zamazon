import axios from 'axios';
import React, { FC, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import cartSlice from '../state/reducer/cartSlice';
import idprodSlice from '../state/reducer/idprodSlice';

const ShippingScreen: FC = () => {

  const [Address, setAddress] = useState('');

  // s here is short for state 
  const appuser = useAppSelector(s => s.user);
  // s here is short for state 
  const cart = useAppSelector(s => s.cart.cart_items);
  
  const dispatch = useAppDispatch()
  // end of state 


  const nav = useNavigate();

  useEffect(() => {
    setTimeout(() => {

      if (!(appuser.user as any).name || !cart.length) {
        nav('/');
      }
    }, 10);
  }, [])

  return (
    <div>

      <Helmet>
        <title>ZAMAZON - Shipping Screen</title>
      </Helmet>


      <div className="ShippingScreen">
        <form action="submit" onSubmit={
          async (e) => {
            e.preventDefault();


            try {
              const { data } = await axios.post(
                '/api/orders',
                {
                  orderItems: cart.map(i => (i as any).prod),
                  shippingAddress: Address,
                },
              );
              nav('/');
            } catch (err) {
              console.log("failed")
            }



          }
        } >
          <div className="legend_fieldset">
            <fieldset>
              <legend>What's your Address?</legend>
              <input type="Name" name="Name" id="Name" required
                onChange={e => setAddress(e.target.value)
                } />
            </fieldset>
          </div>
          <div className='Address_button' >
            <button
              onClick={
                () => {

                  dispatch(idprodSlice.actions.clear())

                  dispatch(cartSlice.actions.clear())
                }
              }
            >place order</button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default ShippingScreen
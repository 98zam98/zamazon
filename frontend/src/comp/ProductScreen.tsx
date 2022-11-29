
import React, { FC, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../state/hooks';
import axios, { AxiosError } from 'axios';
import ploadingSlice from '../state/reducer/ploadingSlice';

import { useParams } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import Add_to_cart from './Add_to_cart';

const ProductScreen: FC = () => {

  // we use this to get the url
  const params = useParams();


  // apploading is used to see the whole loading state for 
  // s here is short for state 
  const apploading = useAppSelector(s => s.ploading);

  const dispatch = useAppDispatch();


  useEffect(() => {
    const fetchdata = async () => {
      dispatch(ploadingSlice.actions.fetch_request);
      try {
        const result = await axios.get(`/api/products/slug/${params.slug}`);
        dispatch(ploadingSlice.actions.fetch_success(result.data));
      } catch (e) {
        dispatch(ploadingSlice.actions.fetch_fail((e as AxiosError)));
      }
    };
    fetchdata();

  }, [params.slug])

  return (
    <div className="product_screen">
      <Helmet>
        <title>{params.slug}</title>
      </Helmet>
      {
        apploading.loading ?
          <h1 className="loading">loading</h1> :
          apploading.error.isAxiosError ?
            <h1 className="error">
              {apploading.error.message}
            </h1> :
            <div className='prod_view' >
              <div className='prod_img' >
                <img src={(apploading.product as any)['image']} alt={(apploading.product as any)['name']} />
              </div>
              <div className='prod_info' >
                <div className='prod_name' >
                  {(apploading.product as any)["name"]}
                </div>
                <div className='prod_price' >
                  price: {(apploading.product as any)["price"]}
                </div>
                <div className='prod_description' >
                  price: {(apploading.product as any)["description"]}
                </div>
              </div>
              <div className='prod_cart' >
                <div className='prod_price' >
                  price: {(apploading.product as any)["price"]}
                </div>
                <div className='prod_stoke' >
                  Count In Stock: {(apploading.product as any)["countInStock"]}
                </div>
                <Add_to_cart product={apploading.product} />
              </div>
            </div>
      }
    </div>
  )
}

export default ProductScreen
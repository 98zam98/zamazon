import React, { FC, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { Link } from "react-router-dom";
import axios, { AxiosError } from 'axios';
import loadingSlice from '../state/reducer/loadingSlice';
import Add_to_cart from './Add_to_cart';

const Mainer: FC = () => {


  // apploading is used to see the whole loading state for debug
  // s here is short for state 
  const apploading = useAppSelector(s => s.loading);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchdata = async () => {
      dispatch(loadingSlice.actions.fetch_request);
      try {
        const result = await axios.get('/api/products');
        dispatch(loadingSlice.actions.fetch_success(result.data));
      } catch (e) {
        dispatch(loadingSlice.actions.fetch_fail((e as AxiosError)));
      }
    };
    fetchdata();
  }, [])

  return (
    <main>
      <h1 className={`feat ${apploading.loading}_loading_feat ${apploading.error.isAxiosError}_error_feat `}>featured products</h1>
      <div className="products">
        {
          apploading.loading ?
            <h1 className="loading">loading</h1> :
            apploading.error.isAxiosError ?
              <h1 className="error">
                {apploading.error.message}
              </h1> :
              apploading.products.map(
                i => (
                  <div className="product" key={i['slug']}>
                    <Link to={`/product/${i["slug"]}`}  ><img src={i['image']} alt={i['name']} /></Link>
                    <div className="info">
                      <div className="name_price">
                        <Link to={`/product/${i['slug']}`}  >
                          <p className="name">
                            {i['name']}
                          </p>
                        </Link >
                        <p className="price">
                          ${i['price']}
                        </p>
                      </div>
                      <div>
                        <Add_to_cart product={i} />
                      </div>
                    </div>
                  </div>
                )
              )
        }
      </div>
    </main>
  )
}

export default Mainer
import React, { FC, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { Link } from "react-router-dom";
import axios, { AxiosError } from 'axios';
import loadingSlice from '../state/reducer/loadingSlice';

const Mainer: FC = () => {


  // this  AppTheme will be used to change the theme of the app  
  // s here is short for state 
  // apploading is used to see the whole loading state for debug
  const apploading = useAppSelector( s => s.loading);
  // Products is used to render 
  // const Products = useAppSelector( s => s.loading.products);
  // const Products = apploading.products;
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchdata = async () => {
      dispatch(loadingSlice.actions.fetch_request);
      console.log(apploading); 
      try {
        const result = await axios.get('/api/products');
        dispatch(loadingSlice.actions.fetch_success(result.data));
        console.log(apploading);
      } catch (e) {
        dispatch(loadingSlice.actions.fetch_fail((e as AxiosError)));
        console.log(apploading);
      } 
    };
    fetchdata();      

  }, []) 

  return (
    <main>
      <h1 className="feat">featured products</h1>
      <div className="products">
        {
          apploading.loading?
          <div className="loading">loading</div>:
          apploading.error.isAxiosError?
          <div className="loading">
            {apploading.error.message}
            </div>:
          apploading.products.map(
            i => (
              <div className="product" key={i['slug']}>
                <Link to={`/product/${i["slug"]}`}  ><img src={i['image']} alt={i['name']} /></Link>

                <div className="info">
                  <Link to={`/product/${i['slug']}`}  >
                    <p className="name">
                      {i['name']}
                    </p>
                  </Link >
                  <p className="price">
                    ${i['price']}
                  </p>
                  <button>ADD</button>
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
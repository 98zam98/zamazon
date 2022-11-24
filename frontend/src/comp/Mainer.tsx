import React, { FC, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { Link } from "react-router-dom";
import axios, { AxiosError } from 'axios';
import loadingSlice from '../state/reducer/loadingSlice';

const Mainer: FC = () => {


  // apploading is used to see the whole loading state for debug
  // s here is short for state 
  const apploading = useAppSelector(s => s.loading);
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
      <h1 className={ `feat ${apploading.loading}_loading_feat ${apploading.error.isAxiosError}_error_feat `}>featured products</h1>
      <div className="products">
        {

            // <h1 className="loading">loading</h1> 

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
                        <button>ADD</button>
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
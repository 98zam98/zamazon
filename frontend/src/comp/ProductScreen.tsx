
import React, { FC, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { Link } from "react-router-dom";
import axios, { AxiosError } from 'axios';
import ploadingSlice from '../state/reducer/ploadingSlice';

import { useParams } from "react-router-dom";

const ProductScreen: FC = () => {

  // we  use this to get the url
  const params = useParams();

 
  // apploading is used to see the whole loading state for 
  // s here is short for state 
  const apploading = useAppSelector(s => s.ploading);
  // Products is used to render 
  // const Products = useAppSelector( s => s.loading.products);
  // const Products = apploading.products;
  const dispatch = useAppDispatch();

    
  useEffect(() => {
    const fetchdata = async () => {
      dispatch(ploadingSlice.actions.fetch_request);
      // console.log(apploading);
      try {
        const result = await axios.get(`/api/products/slug/${params.slug}`);
        // const result = await axios.get(`/api/products/`);
        // console.log(result.data);
        // console.log( typeof result.data);
        // console.log( typeof result.data);
        dispatch(ploadingSlice.actions.fetch_success(result.data));
        // console.log(`/api/products/slug/${params.slug}`);
        console.log(apploading);
      } catch (e) {
        dispatch(ploadingSlice.actions.fetch_fail((e as AxiosError)));
        // console.log(apploading);
      }
    };
    fetchdata();

  }, [params.slug])

    return (
        <div>
        <div>{params.slug} </div>
        <div>
          {(apploading.product as any)["name"] } 
          {/* { apploading.product["name"] }  */}
        </div> 
        </div>
    )
}

export default ProductScreen
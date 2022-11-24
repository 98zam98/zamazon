import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { productstype } from "../../data";

// export type ploadingstateType = {
//     loading: boolean,
//     error: AxiosError,
//     product: object,

// }



export type ploadingstateType = {
    loading: boolean,
    error: AxiosError,
    product: object,
}

const initialState: ploadingstateType = {
    loading: true,
    error: {
        name: "AxiosError",
        isAxiosError: false,
        toJSON: () => { return { 
            name
            : 
            "toJSON" } },
        message: "initialState"
    },
    product: 
    {
      "name": "loading",
    },
};

const ploadingSlice = createSlice({
    name: 'ploading',
    initialState,
    reducers: {
        // s here is short for state 
        fetch_request: (s: ploadingstateType) => {
            s.loading = true;
        },
        fetch_success: (s: ploadingstateType, action: PayloadAction<object>) => {
            s.loading = false;
            s.product = action.payload;
        },
        fetch_fail: (s: ploadingstateType, action: PayloadAction<AxiosError>) => {
            s.loading = false;
            s.error = action.payload;
        },
    }
}) 

export default ploadingSlice 

/***
 import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { productstype } from "../../data";

// export type ploadingstateType = {
//     loading: boolean,
//     error: AxiosError,
//     product: object,

// }



export type ploadingstateType = {
    loading: boolean,
    error: AxiosError,
    product: productstype,

}

const initialState: ploadingstateType = {
    loading: true,
    error: {
        name: "AxiosError",
        isAxiosError: false,
        toJSON: () => { return { 
            name
            : 
            "toJSON" } },
        message: "initialState"
    },
    product: 
    {
      "name": "sdsfdfsNike Slim shirt",
      "slug": "nike-slim-shirt",
      "category": "Shirts",
      "image": "/images/p1.jpg",
      "price": 120,
      "countInStock": 10,
      "brand": "Nike",
      "rating": 4.5,
      "numReviews": 10,
      "description": "high quality shirt"
    },
};

const ploadingSlice = createSlice({
    name: 'ploading',
    initialState,
    reducers: {
        // s here is short for state 
        fetch_request: (s: ploadingstateType) => {
            s.loading = true;
        },
        fetch_success: (s: ploadingstateType, action: PayloadAction<productstype>) => {
            s.loading = false;
            s.product = action.payload;
        },
        fetch_fail: (s: ploadingstateType, action: PayloadAction<AxiosError>) => {
            s.loading = false;
            s.error = action.payload;
        },
    }
}) 

export default ploadingSlice 
 */
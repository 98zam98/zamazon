import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

export type loadingstateType = {
    loading: boolean,
    error: AxiosError,
    products: [],

}

const initialState: loadingstateType = {
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
    products: [],
};

const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        // s here is short for state 
        fetch_request: (s: loadingstateType) => {
            s.loading = true;
        },
        fetch_success: (s: loadingstateType, action: PayloadAction<[]>) => {
            s.loading = false;
            s.products = action.payload;
        },
        fetch_fail: (s: loadingstateType, action: PayloadAction<AxiosError>) => {
            s.loading = false;
            s.error = action.payload;
        },
    }
}) 

export default loadingSlice 
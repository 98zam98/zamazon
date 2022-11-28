import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import React from 'react'


type cart_state_type = {
    cart_items: object[]
}


const initialState:cart_state_type = {
    cart_items: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add:(s:cart_state_type, action: PayloadAction<object>)=>
        {
            s.cart_items.push(action.payload);
        },
        remove:(s:cart_state_type, action: PayloadAction<object>)=>
        {
            s.cart_items=s.cart_items.filter((i) => (i as any).id != (action.payload as any).id);
            
        }
    }});

export default cartSlice
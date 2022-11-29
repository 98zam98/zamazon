import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import React from 'react'

type user_stateType = {
    user:object
}

const initialState: user_stateType = {
    user:{}
}

const userSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        // s here is short for state 
        signin: (s: user_stateType, action: PayloadAction<object>) => {
            s.user = action.payload;
        },
        signout: (s: user_stateType) => {
            s.user = {};
        },
    }
}) 
export default userSlice
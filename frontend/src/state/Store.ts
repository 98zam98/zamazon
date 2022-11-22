import { configureStore, createSlice } from '@reduxjs/toolkit'
import themeSlice from './reducer/themeSlice'
 
const Store = configureStore({
    reducer:{
        themeState:themeSlice.reducer,
    },
})

export default Store;
export type rootState = ReturnType<typeof Store.getState>;
export type appDispatch = typeof Store.dispatch;
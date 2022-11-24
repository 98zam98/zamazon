import { configureStore, createSlice, getDefaultMiddleware } from '@reduxjs/toolkit'
import loadingSlice from './reducer/loadingSlice';
import ploadingSlice from './reducer/ploadingSlice';
import themeSlice from './reducer/themeSlice'
 
const Store = configureStore({
    reducer:{
        themeState:themeSlice.reducer,
        loading:loadingSlice.reducer,
        ploading:ploadingSlice.reducer
    },
})
export default Store;
export type rootState = ReturnType<typeof Store.getState>;
export type appDispatch = typeof Store.dispatch;
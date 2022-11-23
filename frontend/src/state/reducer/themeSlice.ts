import { createSlice } from "@reduxjs/toolkit";

export type themestateType = {
    theme:string
}

// this theme will be added to the className to change the looks  
const initialState:themestateType = {
    theme: 'amazon'
};



const themeSlice = createSlice({
    name:'theme',
    initialState,
    reducers:{
        // s here is short for state 
        amazon:(s:themestateType)=>{
            s.theme='amazon'
        },
        dark:(s:themestateType)=>{
            s.theme='dark'
        },
    }
})
export default themeSlice
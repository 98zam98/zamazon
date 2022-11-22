import { createSlice } from "@reduxjs/toolkit";

type stateType = {
    theme:string
}

// this theme will be added to the className to change the looks  
const initialState:stateType = {
    theme: 'amazon'
};



const themeSlice = createSlice({
    name:'theme',
    initialState,
    reducers:{
        // s here is short for state 
        amazon:(s:stateType)=>{
            s.theme='amazon'
        },
        dark:(s:stateType)=>{
            s.theme='dark'
        },
    }
})
export default themeSlice
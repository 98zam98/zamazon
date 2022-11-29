import { createSlice } from "@reduxjs/toolkit";


type idprod_state_type = {
    id: number
};

const initialState: idprod_state_type = {
    id: 0
}
const idprodSlice = createSlice({
    name: 'idprod',
    initialState,
    reducers: {
        inc: (s: idprod_state_type) => {
            s.id++;
        },
        dec: (s: idprod_state_type) => {
            s.id--;
        },
        clear: (s: idprod_state_type) => {
            s.id=0;
        }
    }
})

export default idprodSlice
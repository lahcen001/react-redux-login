import { createSlice } from "@reduxjs/toolkit";

const initialState = "red";

export const useSlice = createSlice({
    name :"theme",
    initialState:{value :initialState},
    reducers:{
        theme:(state, action)=>{
            state.value = action.payload
        }
    }

})

export const {theme} = useSlice.actions
export default useSlice.reducer
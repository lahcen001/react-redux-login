import {createSlice } from "@reduxjs/toolkit";

const initialState = {name:"", age:0 , email:""}
export const useSlice = createSlice({
    name:"user",
    initialState:{value :initialState},
    reducers:{
        login:(state, action )=>{
             state.value= action.payload
        },
        logout:(state , action )  =>{
            state.value =  initialState
        }

    },
})

export const {login,logout} = useSlice.actions
export default useSlice.reducer
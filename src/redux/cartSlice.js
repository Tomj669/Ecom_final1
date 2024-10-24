import { createSlice } from "@reduxjs/toolkit";

const initialState = {
items:[],
total:0
}


const cartSlice = createSlice({
  name:'cart',
  initialState:initialState,
  reducers:{
    Add_cart:(state,action)=>{
      const newItem= action.payload
      state.items.push({
        ...newItem
      })
    },
    Remove_cart:(state,action)=>{
      const newItem=action.payload
      state.items=state.items.filter(item=> item.courseName !== newItem.courseName)




      
    }

    
  }
})

export default cartSlice.reducer
export const {Add_cart,Remove_cart} = cartSlice.actions
import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    orders: []
  },
  reducers: {
    
    addOrder: (state, action) => {
        console.log("i am add orders",action.payload)
        const { friends, amount } = action.payload;
        state.orders.push(friends.length,amount)
    }  
  },
});

export const { setAmount } = orderSlice.actions;
export default orderSlice.reducer;
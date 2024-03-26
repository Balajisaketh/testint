import { configureStore } from '@reduxjs/toolkit';
import orderReducer from './orderSlice';
import friendReducer from './friendSlice';

export default configureStore({
  reducer: {
    order: orderReducer,
    friend: friendReducer,
  },
});
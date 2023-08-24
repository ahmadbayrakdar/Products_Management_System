// productSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState')).products
  : [];


const productSlice = createSlice({
  name: 'products list',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    },
    updateRating: (state, action) => {
      const { index, newRating } = action.payload;
      state[index].rating = newRating;
    }
  },
});

export const { addProduct, updateRating } = productSlice.actions;

export default productSlice.reducer;

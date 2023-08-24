import { configureStore } from '@reduxjs/toolkit';
import productReducer from './services/productSlice';

const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

export default store;

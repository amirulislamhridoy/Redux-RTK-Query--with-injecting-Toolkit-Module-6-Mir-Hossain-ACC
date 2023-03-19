import { configureStore } from '@reduxjs/toolkit';
import { productSlice } from './features/productSlice';

const store = configureStore({
    reducer: {
        [productSlice.reducerPath] : productSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productSlice.middleware)
})

export default store
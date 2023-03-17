import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { productApi } from './features/productSlice';

const store = configureStore({
    reducer: {
        [productApi.reducerPath] : productApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware)
})

export default store
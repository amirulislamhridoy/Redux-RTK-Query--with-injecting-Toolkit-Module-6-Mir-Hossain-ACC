import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// RTK Query use with *** injecting ***
export const productSlice = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({
        baseUrl:"http://localhost:5000/"
    }),
    tagTypes: ['Product'],
    endpoints: (builder) => ({})
})

// ------******* 
//  ******  Main RTK Query use ******
// ------*******
// export const productApi = createApi({
//     reducerPath: "product",
//     baseQuery: fetchBaseQuery({
//         baseUrl:"http://localhost:5000/"
//     }),
//     tagTypes: ['Product'],
//     endpoints: (builder) => ({
//         getProduct: builder.query({
//             query: () => '/',
//             providesTags: ['Product'],
//         }),
//         // getSingleProduct: builder.query({
//         //     query: (id) => `/product/${id}`,
//         //     providesTags: ['Product'],
//         // }),
//         addProduct: builder.mutation({
//             query: (data) => ({
//                 url: '/add',
//                 method: 'POST',
//                 body: data
//             }),
//             invalidatesTags: ['Product'],
//         }),
//         removeProduct: builder.mutation({
//             query: (id) => ({
//                 url: `/remove/${id}`,
//                 method: 'DELETE'
//             }),
//             invalidatesTags: ['Product']
//         })
//     })
// })

// export const {useGetProductQuery, useAddProductMutation, useRemoveProductMutation} = productApi
// // export const {useGetProductQuery, useGetSingleProductQuery, useAddProductMutation, useRemoveProductMutation}= productApi